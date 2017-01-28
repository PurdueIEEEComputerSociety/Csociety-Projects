from cv2 import VideoCapture
from PIL import Image
from time import sleep

cam = VideoCapture(0)
sleep(0.5)

_,img = cam.read()
print(Image.fromarray(img).size)