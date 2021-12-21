/**
  Actuator : Solenoid 12V
  Pins: 
    Relay : 3
**/

#define OPEN HIGH
#define CLOSE LOW

const short RELAY = 3;
int doorState = CLOSE;

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
   pinMode(RELAY, OUTPUT);
   pinMode(TRIG_PIN, OUTPUT);
   pinMode(ECHO_PIN, INPUT);
   Serial.begin(BAUD_RATE); 
   digitalWrite(RELAY,CLOSE);
}

void loop() 
{  

    // actively checking if there is a received message from the python script
    if(Serial.available() > 0)
    {
      doorState = Serial.parseInt();
      if (doorState == CLOSE)
        digitalWrite(RELAY, OPEN);
      else if (doorState == OPEN)
        digitalWrite(RELAY, CLOSE);  
    }
    
    else
    {
      digitalWrite(TRIG_PIN, LOW);  
      delayMicroseconds(4);  
      digitalWrite(TRIG_PIN, HIGH);  
      delayMicroseconds(15);  
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
   const float SOUND_SPEED = 0.034; // 0.034 us/cm
   return ((duration * SOUND_SPEED) / 2);
}
