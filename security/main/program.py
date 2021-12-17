from threading import Thread
import time
import cv2
from typing import List

from security.communication.serial_communication import Serial
from security.recognition.qr_recognizer import QRRecognizer
from security.recognition.face_recognizer import FaceRecognizer
from security.tts.messages import Messages
from security.tts.text_to_speech import TTS


class Program:
    """
    Entry point of the script
    """
    @classmethod
    def run(self):
        CAM_MIN_DISTANCE = 20
        CAM_MAX_DISTANCE = 50
        _serial = Serial()
        capture = cv2.VideoCapture(0)
        qr_recognizer = QRRecognizer.get_instance(capture)
        face_recognizer = FaceRecognizer.get_instance(capture)
        tts = TTS.get_instance()
        threads: List[Thread] = []

        while True:
            byte = _serial.read()
            distance = int.from_bytes(byte, byteorder='big')
            print(f"distance: {distance}")

            if distance >= CAM_MIN_DISTANCE and distance <= CAM_MAX_DISTANCE or True:

                threads.append(Thread(target=tts.speak, args=(Messages.SHOW_QR_CODE, )))
                threads[-1].start()

                # QR authentication
                user = qr_recognizer.run()
                if user:
                    # Face authentication
                    if face_recognizer.run(user):
                        _serial.write('180')
                        tts.speak(Messages.WELCOME_HOME)
                        time.sleep(5)
                        _serial.write('0')
                        tts.speak(Messages.DOOR_CLOSE)

                qr_recognizer.reset()
                face_recognizer.reset()
                distance = -1
            time.sleep(1)