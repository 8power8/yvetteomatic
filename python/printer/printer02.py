# -*- coding: UTF-8 -*-

from __future__ import print_function
import RPi.GPIO as GPIO
import subprocess, time, Image, socket
from Adafruit_Thermal import *


printer = Adafruit_Thermal("/dev/ttyAMA0", 19200, timeout=5)

# Processor load is heavy at startup; wait a moment to avoid
# stalling during greeting.
#time.sleep(10)

# Print greeting image
printer.println("Les antennes de Radio France sont encore perturbées ce lundi. Un mouvement ed grève illimité pour protester contre les mesures d'économie. Les Syndycats craignent une plan social dans l'entreprise, déficitaire cette année de 21 millions d'euros. Très critiqié pour avoir consacré 105 000 euros à la rénovation de son bureau, le PDG de Radio France Mathieu Gallet a décidé de s'exprimer publiquement.")
printer.feed(3)