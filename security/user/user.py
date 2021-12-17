class User:
    """
    Stores the information of the current user
    """
    def __init__(self, name: str, picture_url: str) -> None:
        self.__name = name
        self.__picture_url = picture_url

    @property
    def name(self) -> str:
        return self.__name

    @property
    def picture(self) -> str:
        return self.__picture_url

    def __str__(self) -> str:
        return f"name: {self.__name}, picture: {self.__picture_url}"
