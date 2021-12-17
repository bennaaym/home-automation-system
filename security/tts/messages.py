from strenum import StrEnum


class Messages(StrEnum):
    """
    Hold different messages used to interact with the user
    """
    SHOW_QR_CODE = "hello, please show your QR code to the camera"
    VALID_QR_CODE = "valid QR code, proceed to face recognition."
    INVALID_QR_CODE = "access denied, invalid QR code."
    FACE_RECOGNIZED = "Face recognized"
    FACE_NOT_RECOGNIZED = "access denied face not recognized."
    WELCOME_HOME = "welcome home, door is open, please enter"
    DOOR_CLOSE = "door closed"
