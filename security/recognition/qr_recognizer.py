from threading import Thread
import cv2
import numpy as np
from pyzbar.pyzbar import decode
from typing import List, Any, Union

from security.database.firestore import Firestore
from security.user.user import User
from security.tts.messages import Messages
from security.tts.text_to_speech import TTS
from .util import terminate_thread


class QRRecognizer:
    """
    Detect and validate a the QR code showing to the camera by the user
    This class uses Singleton design pattern
    """

    # SINGLETON INSTANCE
    __instance = None

    @staticmethod
    def get_instance(capture):
        if QRRecognizer.__instance is None:
            QRRecognizer.__instance = QRRecognizer(capture)

        return QRRecognizer.__instance

    # PRIVATE CONSTRUCTOR
    def __init__(self, capture) -> None:
        # checks if there is an existing instance of QRRecognizer
        if QRRecognizer.__instance:
            raise Exception("Singleton cannot be instantiated more than once")
        else:
            self.__capture = capture
            self.__tts = TTS.get_instance()
            self.__tts_thread = None
            self.__threads: List[Thread] = []
            self.__thread_killers: List[Thread] = []
            self.__is_running = True
            self.__user: Union[User, None] = None
            self.__db = Firestore.get_instance()
            QRRecognizer.__instance = self

    # PUBLIC METHODS
    def reset(self) -> None:
        self.__is_running = True
        self.__user = None
        self.__tts_thread = None

    def run(self) -> Union[User, None]:

        while self.__is_running:
            # gets current frame from the video stream
            _, frame = self.__capture.read()

            # decodes qr code if any
            qr_data = self.__get_qr_data(frame)

            if len(qr_data) == 0:
                cv2.imshow("QR RECOGNITION", frame)

                # creates a killer thread to kill tts running __threads
                killer = Thread(target=terminate_thread, args=(self.__threads, ))
                self.__thread_killers.append(killer)
                killer.start()

            else:
                # decodes QR code
                # frames the detected QR code
                for obj in qr_data:
                    key = obj.data.decode('utf-8')
                    frame = self.__draw_polygon(frame, obj)
                    cv2.imshow("QR RECOGNITION", frame)

                # creates a different thread for database interaction and voice messages
                if len(self.__threads) == 0:
                    self.__tts_thread = Thread(target=self.__check_qr_key, args=(key, ))
                    self.__threads.append(self.__tts_thread)
                    self.__tts_thread.start()

            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

        cv2.destroyAllWindows()
        return self.__user

    # PRIVATE METHODS
    def __get_qr_data(self, input_frame) -> List[Any]:
        try:
            return decode(input_frame)
        except:
            return []

    def __draw_polygon(self, frame, qr_object):
        pts = np.array([qr_object.polygon], np.int32)
        pts = pts.reshape((4, 1, 2))
        cv2.polylines(frame, [pts], True, (210, 27, 27), 3)
        return frame

    def __check_qr_key(self, key) -> None:
        user = self.__db.connect(key)
        if user:
            self.__tts.speak(Messages.VALID_QR_CODE)
            self.__is_running = False
            self.__user = user
        else:
            self.__tts.speak(Messages.INVALID_QR_CODE)
