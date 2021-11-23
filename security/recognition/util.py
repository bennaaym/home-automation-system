from threading import Thread 
from typing import List

def terminate_thread(threads:List[Thread]):
    for thread in  threads:
        thread.join()
    threads.clear()   
