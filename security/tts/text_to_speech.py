import pyttsx3


class TTS:
    """
    Changes text to speech
    This class uses Singleton design pattern
    """

    # SINGLETON INSTANCE
    __instance = None

    @staticmethod
    def get_instance(
        rate: int = 130,
        lang_id: str = 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Speech\\Voices\\Tokens\\TTS_MS_EN-US_ZIRA_11.0',
    ):
        if TTS.__instance is None:
            TTS.__instance = TTS(rate, lang_id)

        return TTS.__instance

    # PRIVATE CONSTRUCTOR
    def __init__(self, rate: int = None, lang_id: str = None) -> None:
        # checks if there is an existing instance of TTS
        if TTS.__instance:
            raise Exception("Singleton cannot be instantiated more than once")

        else:
            self.engine = pyttsx3.init()
            self.engine.setProperty('voice', lang_id)
            self.engine.setProperty('rate', rate)
            TTS.__instance = self

    # PUBLIC METHODS
    def speak(self, message) -> None:
        if self.engine._inLoop:
            self.engine.endLoop()
        self.engine.say(message)
        self.engine.runAndWait()
        self.engine.stop()
