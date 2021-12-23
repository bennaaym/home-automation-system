#include<ThingSpeak.h>
#include<ESP8266WiFi.h>
#include<ESP8266WebServer.h>
unsigned long channel_num=1580471;
const char ssid[]="OPPO Reno3";
const char password[]="00000000";

const char* writeAPIKey = "E1IEL3E8446RN0I8";     //  Thingspeak  write API Key
const char* readAPIKey  = "SRMRPASNKDIMQPBX";

int kitchen_lamp;
int living_room_lamp;

unsigned int value;

WiFiClient client;   // make the client of the WiFi which connect to the ThingSpeak webServer
ESP8266WebServer server(80); 
void setup() {
   Serial.begin(115200);
  // put your setup code here, to run once:
   pinMode(D1,OUTPUT);
   pinMode(D3,OUTPUT);
   digitalWrite(D1,0); 
   digitalWrite(D3,0); 
   WiFi.begin(ssid,password);    // connect to the wifi STA connection
   while(WiFi.status()!=WL_CONNECTED)
   {
     delay(500);
     Serial.print(".");
   }
   Serial.println(WiFi.localIP());    // print the wifi local ip
   ThingSpeak.begin(client);      // connect the client to the thingSpeak server
   server.begin(); 
}

void loop() {
  // put your main code here, to run repeatedly:
     server.handleClient();    // it realy handle the Client
     kitchen_lamp=ThingSpeak.readFloatField(channel_num,1);    // rad the last data of the field 1
     living_room_lamp=ThingSpeak.readFloatField(channel_num,2);    // rad the last data of the field 1
     digitalWrite(D1,kitchen_lamp);
     digitalWrite(D3,living_room_lamp);
     Serial.println("kitchen");
     Serial.println(kitchen_lamp);
     Serial.println(living_room_lamp); 

}
