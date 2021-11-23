from typing import List
import face_recognition
import cv2
import os
import glob
import numpy as np
from threading import Thread
from db.db import DB
from recognition.util import terminate_thread
from tts.text_to_speech import TTS
from tts.messages import Messages

class FaceRecognizer:
    """
    Detect and validate the user's face
    """
    # CONSTRUCTOR
    def __init__(self,capture,db:DB) -> None:
        self.__capture = capture
        self.__is_running = True
        self.known_face_encodings = []
        self.known_face_names = []
        self.frame_resizing = 0.2  # Resize frame for a higher speed
        self.__db = db
        self.__tts = TTS()
        self.__threads:List[Thread] = []



    # PUBLIC METHODS
    def run(self)-> bool:
        # Encode faces from a folder
        self.__load_encoding_images("security/recognition/images/")
        counter = 20
        while self.__is_running or counter != 0:
            _, frame = self.__capture.read()
            
            # Detect Faces
            face_locations, face_names = self.__detect_known_faces(frame)
        
            for face_loc, name in zip(face_locations, face_names):
                y1, x2, y2, x1 = face_loc[0], face_loc[1], face_loc[2], face_loc[3]
                cv2.putText(frame, name,(x1, y1 - 20), cv2.FONT_HERSHEY_DUPLEX, 1, (210, 27, 27), 2)
                cv2.rectangle(frame, (x1, y1), (x2, y2), (210, 27, 27), 4)

                if len(self.__threads) == 0:
                    thread = Thread(target=self.__check_user,args=(name,))
                    self.__threads.append(thread)
                    thread.start()


            cv2.imshow('FACE RECOGNITION',frame)
            counter -=1
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        
        cv2.destroyAllWindows()
        return not self.__is_running

    # PRIVATE METHODS
    def __load_encoding_images(self, images_path):
        """
        Load encoding images from path
        :param images_path:
        :return:
        """
        # Load Images
        images_path = glob.glob(os.path.join(images_path, "*.*"))
        print(images_path)

        print("{} encoding images found.".format(len(images_path)))

        # Store image encoding and names
        for img_path in images_path:
            img = cv2.imread(img_path)
            rgb_img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

            # Get the filename only from the initial file path.
            basename = os.path.basename(img_path)
            (filename, _) = os.path.splitext(basename)
            # Get encoding
            img_encoding = face_recognition.face_encodings(rgb_img)[0]

            # Store file name and file encoding
            self.known_face_encodings.append(img_encoding)
            self.known_face_names.append(filename)
        print("Encoding images loaded")

    def __detect_known_faces(self, frame):
        small_frame = cv2.resize(frame, (0, 0), fx=self.frame_resizing, fy=self.frame_resizing)
        # Find all the faces and face encodings in the current frame of video
        # Convert the image from BGR color (which OpenCV uses) to RGB color (which face_recognition uses)
        rgb_small_frame = cv2.cvtColor(small_frame, cv2.COLOR_BGR2RGB)
        face_locations = face_recognition.face_locations(rgb_small_frame)
        face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)

        face_names = []
        for face_encoding in face_encodings:
            # See if the face is a match for the known face(s)
            matches = face_recognition.compare_faces(self.known_face_encodings, face_encoding)
            name = "Unknown"

            # If a match was found in known_face_encodings, just use the first one.
            if True in matches:
                first_match_index = matches.index(True)
                name = self.known_face_names[first_match_index]


            # Or instead, use the known face with the smallest distance to the new face
            else:
                face_distances = face_recognition.face_distance(self.known_face_encodings, face_encoding)
                best_match_index = np.argmin(face_distances)
                if matches[best_match_index]:
                    name = self.known_face_names[best_match_index]

            face_names.append(name)

        # Convert to numpy array to adjust coordinates with frame resizing quickly
        face_locations = np.array(face_locations)
        face_locations = face_locations / self.frame_resizing
        return face_locations.astype(int), face_names


    def __check_user(self,name):
        if name.lower() == 'unknown':
            self.__tts.speak(Messages.FACE_NOT_RECOGNIZED)
        else:
            self.__is_running = False
            self.__tts.speak(f"{Messages.FACE_RECOGNIZED}, Hi! {name}")