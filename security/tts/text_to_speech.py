import pyttsx3
from pyttsx3 import engine 

class TTS:
    """
    Changes text to speech
    """

    def __init__(
        self,
        rate:int = 130,
        lang_id:str = 'HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\TTS_MS_EN-US_ZIRA_11.0',
    )-> None:

        self.engine = pyttsx3.init()
        self.engine.setProperty('voice',lang_id)
        self.engine.setProperty('rate',rate)


    def speak(self,message)-> None:
        self.engine.say(message)
        self.engine.runAndWait()
        self.engine.stop()

    
    