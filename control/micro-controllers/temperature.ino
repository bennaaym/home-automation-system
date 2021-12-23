#include<ThingSpeak.h>
#include<ESP8266WiFi.h>
#include<ESP8266WebServer.h>
unsigned long channel_num=1580471;
const char ssid[]="OPPO Reno3";
const char password[]="";

const char* writeAPIKey = "E1IEL3E8446RN0I8";     //  Thingspeak  write API Key
const char* readAPIKey  = "SRMRPASNKDIMQPBX";

int sicaklikSensor=A0;      //  LM35  Data  ucu A0  pinine  bağlanacak
float sicaklikDegeri;     //  Analog  değeri  dönüştüreceğimiz  sıcaklık  değeri
float olculenDeger;        // Ölçeceğimiz analog  değer
unsigned int value;


WiFiClient client;   // make the client of the WiFi which connect to the ThingSpeak webServer
ESP8266WebServer server(80); 

void setup() {
  
  Serial.begin(115200);
  // put your setup code here, to run once:
   pinMode (A0,  INPUT); 
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
  server.handleClient();  
  delay(500);
  sicaklik();
}

void  sicaklik (){
      /*  LM35  sensöründen sıcaklık  değeri  okuma işlemi  */
        olculenDeger  = analogRead  (sicaklikSensor);   //  A0  analog  ucundan değer oku
        olculenDeger  = (olculenDeger/1024)*5000;         //  mv'a  dönüşüm işlemi
        sicaklikDegeri  = olculenDeger  /12,0;                 // mV'u  sıcaklığa dönüştür
        sicaklikDegeri  = sicaklikDegeri-10;
      
        Serial.print("ThingSpeak  Gonderilen  Sicaklik  Değeri: "); Serial.println(sicaklikDegeri);
        
      /*  ThingSpeak  Field Yazma İşlemi */
          ThingSpeak.writeField (channel_num, 3, sicaklikDegeri, writeAPIKey);             //  sıcaklık  değerini  gönder
//        ThingSpeak.setField (1, sicaklikDegeri);              //  1 nolu  field ı kur
//        ThingSpeak.writeFields(channelID, writeAPIKey);             //  kurulu  field lere  yaz (çoklu  yazma)
          Serial.println("\n");
          delay(5000);
      /*  ThingSpeak  Field Okuma İşlemi */
        float oku = ThingSpeak.readFloatField (channel_num, 3);              //  ilgili  kanalın belirtilen  field oku
//      float oku = ThingSpeak.readFloatField(channelID,  field_no, readAPIKey);              //  private kanallar  için  readAPIKey
        Serial.print("ThingSpeak’ten  Okunan  Sicaklik  Değeri: "); 
        Serial.println(oku);
}
