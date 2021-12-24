from typing import List
import face_recognition
import cv2
import numpy as np
import urllib
from threading import Thread
from security.user.user import User
from security.tts.text_to_speech import TTS
from security.tts.messages import Messages


class FaceRecognizer:
    """
    Detect and validate the user's face
    This class uses Singleton design pattern
    """

    # SINGLETON INSTANCE
    __instance = None

    @staticmethod
    def get_instance(capture):

        # checks if there is an existing instance of QRRecognizer
        if FaceRecognizer.__instance is None:
            FaceRecognizer.__instance = FaceRecognizer(capture)

        return FaceRecognizer.__instance

    # CONSTRUCTOR
    def __init__(self, capture) -> None:
        # checks if there is an existing instance of FaceRecognizer
        if FaceRecognizer.__instance:
            raise Exception("Singleton cannot be instantiated more than once")

        else:
            self.__capture = capture
            self.__is_running = True
            self.__known_face_encodings = []
            self.__known_face_names = []
            self.__frame_resizing = 0.2
            self.__tts = TTS.get_instance()
            self.__threads: List[Thread] = []
            self.counter = -1
            self.__face_detected: str = ""
            FaceRecognizer.__instance = self

    # PUBLIC METHODS
    def reset(self) -> None:
        self.__is_running = True
        self.__face_detected = ""
        self.__known_face_encodings = []
        self.__known_face_names = []
        self.counter = -1
        self.__threads.clear()

    def run(self, user: User) -> bool:
        # encodes user face
        self.__image_encoding(user)

        while self.__is_running or self.counter > 0:
            self.counter -= 1
            _, frame = self.__capture.read()

            # detect faces
            face_locations, face_names = self.__detect_known_faces(frame)
            for face_loc, name in zip(face_locations, face_names):
                y1, x2, y2, x1 = face_loc[0], face_loc[1], face_loc[2], face_loc[3]
                cv2.putText(frame, name, (x1, y1 - 20), cv2.FONT_HERSHEY_DUPLEX, 1, (210, 27, 27), 2)
                cv2.rectangle(frame, (x1, y1), (x2, y2), (210, 27, 27), 4)

                if len(self.__threads) == 0:
                    thread = Thread(target=self.__check_user, args=(name, ))
                    self.__threads.append(thread)
                    thread.start()

            cv2.imshow('FACE RECOGNITION', frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
            if self.__face_detected == "unknown":
                break

        cv2.destroyAllWindows()

        # for thread in self.__threads:
        #     thread.join()

        return not self.__is_running

    # PRIVATE METHODS
    def __image_encoding(self, user):
        # load user picture from the cloud
        img = self.__url_to_image(user.picture)

        # get encoding
        rgb_img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img_encoding = face_recognition.face_encodings(rgb_img)[0]

        # stores user name and image encoding
        self.__known_face_encodings.append(img_encoding)
        self.__known_face_names.append(user.name)

    def __url_to_image(self, url):
        with urllib.request.urlopen(url) as response:
            image = np.asarray(bytearray(response.read()), dtype="uint8")
            image = cv2.imdecode(image, cv2.IMREAD_COLOR)

        return image

    def __detect_known_faces(self, frame):
        small_frame = cv2.resize(frame, (0, 0), fx=self.__frame_resizing, fy=self.__frame_resizing)

        # finds all the faces and face encodings in the current frame of video
        # converts the image from BGR color to RGB color
        rgb_small_frame = cv2.cvtColor(small_frame, cv2.COLOR_BGR2RGB)
        face_locations = face_recognition.face_locations(rgb_small_frame)
        face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

        face_names = []
        for face_encoding in face_encodings:
            # sees if the face is a match for the known face(s)
            matches = face_recognition.compare_faces(self.__known_face_encodings, face_encoding)
            name = "Unknown"

            # if a match was found in known_face_encodings, just use the first one.
            if True in matches:
                first_match_index = matches.index(True)
                name = self.__known_face_names[first_match_index]

            # or instead, use the known face with the smallest distance to the new face
            else:
                face_distances = face_recognition.face_distance(self.__known_face_encodings, face_encoding)
                best_match_index = np.argmin(face_distances)
                if matches[best_match_index]:
                    name = self.__known_face_names[best_match_index]

            face_names.append(name.capitalize())

        # converts to numpy array to adjust coordinates with frame resizing quickly
        face_locations = np.array(face_locations)
        face_locations = face_locations / self.__frame_resizing
        return face_locations.astype(int), face_names

    def __check_user(self, name):
        if name.lower() == 'unknown':
            self.__tts.speak(Messages.FACE_NOT_RECOGNIZED)
        else:
            self.__is_running = False
            self.counter = 10
            self.__tts.speak(f"{Messages.FACE_RECOGNIZED}, Hi! {name}")

        self.__face_detected = name.lower()
