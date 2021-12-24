/*
 * ThingSpeaks Credentials
 *
 */
#include<ThingSpeak.h>
#include<ESP8266WiFi.h>
#include<ESP8266WebServer.h>
const char ssid[]="OPPO Reno3";
const char password[]="00000000";
const char* writeAPIKey = "E1IEL3E8446RN0I8";    
const char* readAPIKey  = "SRMRPASNKDIMQPBX";
unsigned long channel_num=1580471;

WiFiClient client;   
ESP8266WebServer server(80); 

/*
 * Actuator: Servo Motor SG90
 * PINs: 
 *     kitchen_servo : D0
 *     living_room_servo : D1
 */

#include <Servo.h>
Servo kitchen_servo;
Servo living_room_servo;
const short pin_kitchen_servo = D0;
const short pin_living_room_servo = D1;

/*
 * Serial Communication
 */
 const int BAUD_RATE = 115200;
 
void setup() 
{
   Serial.begin(BAUD_RATE);
   WiFi.begin(ssid,password);   
   while(WiFi.status() != WL_CONNECTED)
   {
     delay(500);
     Serial.print(".");
   }
   kitchen_servo.attach(pin_kitchen_servo); 
   living_room_servo.attach(pin_living_room_servo); 
   Serial.println(WiFi.localIP());
   ThingSpeak.begin(client);      
   server.begin(); 
}

void loop() 
{
  server.handleClient();  
  kitchen_servo.write(ThingSpeak.readFloatField(channel_num,4));
  living_room_servo.write(ThingSpeak.readFloatField(channel_num,5));
}
