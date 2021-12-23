import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from security.user.user import User
from typing import Union


class Firestore:
    """
    Handle all interactions with Firebase Firestore database
    This class uses Singleton design pattern
    """
    # SINGLETON INSTANCE
    __instance = None

    @staticmethod
    def get_instance():
        if Firestore.__instance is None:
            Firestore.__instance = Firestore()

        return Firestore.__instance

    # PRIVATE CONSTRUCTOR
    def __init__(self) -> None:
        # checks if there is an existing instance of Firestore
        if Firestore.__instance:
            raise Exception("Singleton cannot be instantiated more than once")
        else:
            firebase_admin.initialize_app(
                credentials.Certificate("security/database/serviceAccountKey.json")
            )

            self.__db = firestore.client()
            Firestore.__instance = self

    # PUBLIC METHODS
    def connect(self, key) -> Union[User, None]:
        COLLECTION_NAMES = ['users', 'visitors']
        FIELD_TO_FETCH = 'key'

        for i in range(0, 2):
            # fetches user from database
            docs = self.__db.collection(COLLECTION_NAMES[i]).where(FIELD_TO_FETCH, "==", key).get()

            # checks if there is a user that corresponds to given the key
            if len(docs) != 0:
                user = docs[0].to_dict()
                return User(user["name"], user["picture_url"])

        return None
