#include <Servo.h>  

Servo lockServo;
const short LOCK_PIN = 9;
int lockAngle = 0;


const short TRIG_PIN = 12; // Trigger Pin of Ultrasonic Sensor
const short ECHO_PIN = 13; // Echo Pin of Ultrasonic Sensor
const int BAUD_RATE = 9600;
int duration = -1;
int distance = -1;

void setup() 
{
   lockServo.attach(LOCK_PIN);
   pinMode(TRIG_PIN, OUTPUT);
   pinMode(ECHO_PIN, INPUT);
   Serial.begin(BAUD_RATE); 
}

void loop() 
{  

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
