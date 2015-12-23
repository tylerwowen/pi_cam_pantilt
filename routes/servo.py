#!/usr/bin/env python

import RPi.GPIO as GPIO
import time
import sys

GPIO.setmode(GPIO.BOARD)
GPIO.setup(18, GPIO.OUT)

p = GPIO.PWM(18, 50)

try:
	angle = int(sys.stdin.readline())
	if angle >= 0 and angle <= 180 :
#		print('New angle is ' + str(angle))
		DC = (angle / 180.0 * 10 + 2.5)
#		print('Set new DC to ' + str(DC))
		p.start(DC)
		time.sleep(0.5)
		p.stop()
		GPIO.cleanup()

except KeyboardInterrupt:
	p.stop()
	GPIO.cleanup()

