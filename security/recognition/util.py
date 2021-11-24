from threading import Thread 
from typing import List

def terminate_thread(threads:List[Thread]):
    """
    Utility function used to kill threads
    """
    for thread in  threads: thread.join()
    threads.clear()   
