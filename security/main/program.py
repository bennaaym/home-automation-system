from communication.serial_communication import Serial
import time
import cv2 
from db.firestore import Firestore
from recognition.qr_recognizer import QRRecognizer
from recognition.face_recognizer import FaceRecognizer
from tts.messages import Messages
from tts.text_to_speech import TTS


class Program:
    """
    Entry point of the script
    """

    @classmethod
    def run(self):
        
    #     CAM_MIN_DISTANCE = 20 #cm
    #     CAM_MAX_DISTANCE = 50 #cm
    #     _serial = Serial()

        capture = cv2.VideoCapture(0)
        db = Firestore()
        qr_recognizer = QRRecognizer(capture,db)
        face_recognizer = FaceRecognizer(capture,db)
        tts = TTS()

        while True:
    #         byte = _serial.read()
    #         distance = int.from_bytes(byte,byteorder='big')

    #         if distance >= CAM_MIN_DISTANCE and distance <= CAM_MAX_DISTANCE:
    #             # open cam 
    #             # QR code detection
    #             # Face recognition
    #             break
            
            # QR authentication 
            if qr_recognizer.run():
                # Face authentication                
                if face_recognizer.run():
                    tts.speak(Messages.WELCOME_HOME)
                    break
                    
            
                
            