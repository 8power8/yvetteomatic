from __future__ import print_function
import RPi.GPIO as GPIO
import subprocess, time, Image, socket
from Adafruit_Thermal import *
import sys

for arg in sys.argv:
	print arg

#printer = Adafruit_Thermal("/dev/ttyAMA0", 19200, timeout=5)

# Processor load is heavy at startup; wait a moment to avoid
# stalling during greeting.
#time.sleep(10)

# Print greeting image
#printer.printImage(Image.open('/home/pi/yvetteroulette/img/sudoku.png'), True)
# printer.printImage(Image.open(sys.argv[0]), True)



# printer.feed(3)