from communication.serial_communication import Serial
import time

class Program:
    """
    Entry point of the script
    """

    @classmethod
    def run(self):
        
        CAM_MIN_DISTANCE = 20 #cm
        CAM_MAX_DISTANCE = 50 #cm
        _serial = Serial()

        while True:
            byte = _serial.read()
            distance = int.from_bytes(byte,byteorder='big')

            if distance >= CAM_MIN_DISTANCE and distance <= CAM_MAX_DISTANCE:
                # open cam 
                # QR code detection
                # Face recognition
                break
               

            
            