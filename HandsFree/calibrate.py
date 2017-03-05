from tkinter import *
from cv2 import VideoCapture
from PIL import Image, ImageTk
from time import sleep

cam = VideoCapture(0)
sleep(0.5)

def updateImage():
    global pimg
    _,img = cam.read()
    pimg = ImageTk.PhotoImage(Image.fromarray(img))
    lbl.configure(image=pimg)
    root.after(20, updateImage)

_,img = cam.read()
image = Image.fromarray(img)

root = Tk()
root.geometry("%dx%d" % image.size)
pimg = ImageTk.PhotoImage(image)
lbl = Label(root, image=pimg)
lbl.pack()
root.after(20, updateImage)
root.mainloop()