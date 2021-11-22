from abc import ABCMeta,abstractmethod

class DB(metaclass=ABCMeta):
    """
    Abstraction for all classes that directly interact with database 
    """

    @abstractmethod
    def connect(self):
        pass
