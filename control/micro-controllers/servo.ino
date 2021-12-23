#include <Servo.h>
#include<ThingSpeak.h>
#include<ESP8266WiFi.h>
#include<ESP8266WebServer.h>

unsigned long channel_num=1580471;
const char ssid[]="OPPO Reno3";
const char password[]="";

const char* writeAPIKey = "E1IEL3E8446RN0I8";     //  Thingspeak  write API Key
const char* readAPIKey  = "SRMRPASNKDIMQPBX";

WiFiClient client;   // make the client of the WiFi which connect to the ThingSpeak webServer
ESP8266WebServer server(80); 

Servo kitchen_servo;
Servo living_room_servo;

void setup() {
   Serial.begin(115200);
   WiFi.begin(ssid,password);    // connect to the wifi STA connection
   while(WiFi.status()!=WL_CONNECTED)
   {
     delay(500);
     Serial.print(".");
   }
   kitchen_servo.attach(2); //D4
   kitchen_servo.write(0);
   living_room_servo.attach(3); //D4
   living_room_servo.write(0);
   delay(2000);
   Serial.println(WiFi.localIP());    // print the wifi local ip
  // in urt type the "/" then call the handle on connect function
   ThingSpeak.begin(client);      // connect the client to the thingSpeak server
   server.begin(); 
}

void loop() {
  server.handleClient();  
  kitchen_servo.write(ThingSpeak.readFloatField(channel_num,4));
  living_room_servo.write(ThingSpeak.readFloatField(channel_num,5));
}
