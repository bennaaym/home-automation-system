/**
  Actuator : SG90 Mini Servo
  Pins: 
    Lock : 9
**/
#include <Servo.h>  
Servo lockServo;
const short LOCK_PIN = 9;
int lockAngle = 0;


/**
  Sensor: HC-SR04
  Pins
    Trigger : 12
    Echo : 13 
**/
const short TRIG_PIN = 12;
const short ECHO_PIN = 13;
int duration = -1;
int distance = -1;

/**
  Communication : Serial Port
  Baud rate : 9600
**/
const int BAUD_RATE = 9600;

// init
void setup() 
{
   lockServo.attach(LOCK_PIN);
   pinMode(TRIG_PIN, OUTPUT);
   pinMode(ECHO_PIN, INPUT);
   Serial.begin(BAUD_RATE); 
}

void loop() 
{  

    // actively checking if there is a received message from the python script
    if(Serial.available() > 0)
    {
      lockAngle = Serial.parseInt();
      lockServo.write(lockAngle);
    }
    
    else
    {
      digitalWrite(TRIG_PIN, LOW);  
      delayMicroseconds(2);  
      digitalWrite(TRIG_PIN, HIGH);  
      delayMicroseconds(10);  
      digitalWrite(TRIG_PIN, LOW);  
      duration = pulseIn(ECHO_PIN, HIGH);  
      distance = calculateDistance(duration);
  
      // send data through serial port
      Serial.write(distance);  
    }
    
}

/* utility functions */

// returns the distance in centimeter between the ultrasonic sensor and an object
int calculateDistance(int duration) 
{
   const float SOUND_SPEED = 0.0343; // 0.0343 us/cm
   return (duration * SOUND_SPEED) / 2;
}
