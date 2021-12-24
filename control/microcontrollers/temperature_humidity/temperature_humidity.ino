/*
 * WIFI Credentials
 *
 */
#include<ESP8266WiFi.h>
const char ssid[]="OPPO Reno3";
const char password[]="00000000";

/*
 * ThingSpeak Credentials
 */
#include<ThingSpeak.h>
#include<ESP8266WebServer.h>
const char* writeAPIKey = "E1IEL3E8446RN0I8";     //  Thingspeak  write API Key
const char* readAPIKey  = "SRMRPASNKDIMQPBX";
unsigned const long channel_num = 1580471;
WiFiClient client;   // make the client of the WiFi which connect to the ThingSpeak webServer
ESP8266WebServer server(80); 

// ThingSpeak API channels fields
short const SENSOR_1_TEMPERATURE_FIELD = 3;
short const SENSOR_1_HUMIDITY_FIELD = 6;
short const SENSOR_2_TEMPERATURE_FIELD = 7;
short const SENSOR_2_HUMIDITY_FIELD = 8;


/*
 * DHT11
 * VCC: 5V or 3V
 * GND: GND
 * PINs: 
 *      SENSOR_1 : D0
 *      SENSOR_2 : D1
 */
#include <SimpleDHT.h>
const short PIN_SENSOR_1 = D0;
const short PIN_SENSOR_2 = D1;
SimpleDHT11 SENSOR_1(PIN_SENSOR_1);
SimpleDHT11 SENSOR_2(PIN_SENSOR_2);


/*
 * Serial Communications
 */
const int BAUD_RATE = 115200;


/*
 * Global Variables
 */
//SENSOR_1
byte temperature_1 = 0;
byte humidity_1 = 0;

//SENSOR_2
byte temperature_2 = 0;
byte humidity_2 = 0;

//Errors
int error_1 = SimpleDHTErrSuccess;
int error_2 = SimpleDHTErrSuccess;

void setup() 
{  
   Serial.begin(BAUD_RATE);
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


void loop() 
{
  server.handleClient();  
  delay(500);
  
   if((error_1 = SENSOR_1.read(&temperature_1, &humidity_1, NULL)) != SimpleDHTErrSuccess) 
  {
    Serial.println("error1");
    return;
  }

  if((error_2 = SENSOR_2.read(&temperature_2, &humidity_2, NULL)) != SimpleDHTErrSuccess)
  {
    Serial.println("error2");
    return;
  }

  // send data to ThingSpeak server
  ThingSpeak.writeField (channel_num, SENSOR_1_TEMPERATURE_FIELD, (int)temperature_1, writeAPIKey);             
  ThingSpeak.writeField (channel_num, SENSOR_1_HUMIDITY_FIELD, (int)temperature_2, writeAPIKey);            
  ThingSpeak.writeField (channel_num, SENSOR_2_TEMPERATURE_FIELD, (int)humidity_1, writeAPIKey);             
  ThingSpeak.writeField (channel_num, SENSOR_2_HUMIDITY_FIELD, (int)humidity_2, writeAPIKey);

  //debug
  Serial.println("sensor 1");
  Serial.print((int)temperature_1); 
  Serial.print(" *C, "); 
  Serial.print((int)humidity_1); 
  Serial.println(" H");
  Serial.println("sensor 2");
  Serial.print((int)temperature_2); 
  Serial.print(" *C, "); 
  Serial.print((int)humidity_2); 
  Serial.println(" H");
  delay(1000 * 60);
}
