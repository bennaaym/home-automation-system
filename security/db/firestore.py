from .db import DB


class Firestore(DB):
    """
    Handle all interactions with Firebase Firestore database
    """
    
    def __init__(self) -> None:
        self.db = None
        
    def connect(self)-> None:
        return super().connect()


    def check_key(self,key)-> bool:
        return key == '12346'