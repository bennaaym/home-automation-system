from typing import Any
import serial 
import time


class Serial:
    """
    Handle serial communication between the python script and the microcontroller
    """

    # CONSTRUCTOR
    def __init__(
                    self,
                    PORT:str = 'COM3',
                    BAUD_RATE:int = 9600,
                    TIMEOUT:float = 1,
                    ENCODING:str = 'utf-8'

                ) -> None:

        self.__port:str = PORT
        self.__baud_rate:int = BAUD_RATE
        self.__timeout:float = TIMEOUT
        self.__encoding:str = ENCODING
        self.__serial:Any = None
        
    # PUBLIC METHODS
    def read(self) -> str:
        self.__connect()
        return self.__serial.read()

    def write(self,message)-> None:
        self.__connect()
        self.__serial.write(bytes(message,self.__encoding))
    

    def close(self)-> None:
        self.__serial.close()
        self.__serial = None

    # PRIVATE METHODS
    def __connect(self)-> None :
        if not self.__serial : 
            self.__serial = serial.Serial(self.__port, self.__baud_rate, timeout = self.__timeout)
            time.sleep(.001)
            
