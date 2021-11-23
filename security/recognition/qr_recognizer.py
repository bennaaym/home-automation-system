from threading import Thread, Timer
import cv2
import numpy as np
from pyzbar.pyzbar import decode
from tts.messages import Messages
from tts.text_to_speech import TTS
from db.db import DB
from typing import List,Any
import os

class QRRecognizer:
    """
    Detect and validate a the QR code showing to the camera by the user 
    """

    # CONSTRUCTOR 
    def __init__(self,capture,db:DB)-> None:
        self.capture = capture
        self.tts = TTS()
        self.db = db

    # PUBLIC METHODS
    def run(self)-> None:
        
        while True:
            _, frame = self.capture.read()
            qr_data = self.__get_qr_data(frame)

            if len(qr_data) == 0:
                cv2.imshow("QR RECOGNITION", frame)

            else:
                for obj in qr_data:
                    key = obj.data.decode('utf-8')
                    print(key)
                    frame  = self.__draw_polygon(frame, obj)
                    cv2.imshow("QR RECOGNITION", frame)
                    
                    # creates a different thread for db interaction
                    # check if the QR key exists in the database
                    thread = Thread(target = self.__check_qr_key, args=(key,))
                    thread.start()
                    
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

    # PRIVATE METHODS
    def __get_qr_data(self,input_frame)-> List[Any]:
        try:
            return decode(input_frame)
        except:
            return []


    def __draw_polygon(self,frame,qr_object):   
        pts = np.array([qr_object.polygon], np.int32)
        pts = pts.reshape((4, 1, 2))
        cv2.polylines(frame, [pts], True, (210, 27, 27), 3)
        return frame


    def __check_qr_key(self,key)-> bool:
        if self.db.check_key(key):
            self.tts.speak(Messages.VALID_QR_CODE)
        else:
            self.tts.speak(Messages.INVALID_QR_CODE)
