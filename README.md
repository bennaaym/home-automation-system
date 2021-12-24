# Home Automation System 

Table of Contents:

* [About](#about)
* [Automation System](#automation-system)
    * [Home Security](#home-security)
      * [Hardware](#hardware-1)
      * [Stack](#stack)
      * [Functionalities](#functionalities)
      * [Circuits](#circuits)
      * [Working Principle](#working-principle)
    * [Home Control](#tech-stack)
      * [Hardware](#hardware)
      * [Stack](#stack)
      * [Functionalities](#functionalities)
      * [Circuits](#circuits)
* [Getting Started](#getting-started)
  * [Home Security Setup](#home-security-setup)
    * [Prerequisite](#prerequisite)
  * [Home Control Setup](#home-control-setup)
    * [Prerequisite](#prerequisite)
  * [Firebase Setup](#firebase-setup)
* [Contributing](#contributing)
* [Team](#team)
  * [Aymen Bennbi](#aymen-bennabi)
  * [Hajer Gafsi](#hajer-gafsi)
* [License](#license)




## About:
This project presents a design and prototype implementation of a home automation system that introduces possible solutions whereby the user can secure, monitor, and control his/her house from anywhere through his/her smartphone.


## Automation System
This system is mainly split into two parts: 
- Home Security
- Home Control


### Home Security
This part of the project aims to introduce an AI-based authentication system to decide who is entitled to enter the house and who is not.

#### Hardware
* Arduino Uno Board x1
* Ultrasonic Sensor HC-SR04 x1
* 12V Solenoid x1
* Relay 5V x1
* 12V Energy Source x1

#### Stack
* [Arduino & C](https://www.arduino.cc/en/software)
* [Python](https://www.python.org/)
  * [OpenCV](https://opencv.org/)
  * [Face Recognition](https://github.com/ageitgey/face_recognition)
  * [pyzbar](https://pypi.org/project/pyzbar/)
  * [pySerial](https://pypi.org/project/pyserial/)
* [Firebase](https://firebase.google.com/)

#### Functionalities
<table>
  <tr>
    <td>QR code recognition</td>
     <td>Face Recognition</td>
  </tr>
  <tr>
    <td><img src="https://i.ibb.co/0qjVX5t/unnamed.png"></td>
    <td><img src="https://i.ibb.co/CHfcBYG/unnamed-1.png"></td>

  </tr>
 </table>

#### Circuits
<table>
  <tr>
    <td><img src="https://i.ibb.co/Dw1t70t/security-circuit.png"></td>
  </tr>
 </table>


#### Working Principle
The whole security system is based mainly on two parts: 
* Python script (running on a machine / embedded system)
* Arduino Uno Board

**Python Script**:  running on a computer, it’s responsible for image recognition process and database interactions.

**Arduino Uno Board**: responsible for sensing people in front of the door, opening the door, and closing the door when needed.

(!) All interactions between the The machine running the Python script and the Arduino Uno board are made through serial communication (By default utilize port COM3).


<table>
  <tr>
    <td><img src="https://i.ibb.co/MRVrtmw/Capture.png"></td>
  </tr>
  <tr>
    <td><img src=" https://i.ibb.co/cCmJ2bc/unnamed-2.png
"></td>
  </tr>
 </table>


### Home Control
This part of the project aims to introduce a simple and smooth solution whereby the homeowner can monitor and control his/her home from anywhere and anytime through his/her smartphone.

<table>
  <tr>
    <td><img src="https://i.ibb.co/pyjgXTL/1.png"></td>
    <td><img src="https://i.ibb.co/d2n1xjf/3.png"></td>
    <td><img src="https://i.ibb.co/PDBp4rt/2.png"></td>
  </tr>
</table>

#### Hardware
* NodeMCU x3
* LED x2
* 1 way 5V Relay x2
* SG90 Servo Motor x2
* DHT11 Sensor x2

#### Stack
* [React Native & Redux](https://reactnative.dev/)
* [ThingSpeak REST API](https://www.mathworks.com/help/thingspeak/rest-api.html)
* [Firebase](https://firebase.google.com/) 
  * Authentication
  * Firestore

#### Functionalities
* Control lights & windows of different rooms
* Temperature & Humidity Check
* Control users new users and give entry privilege (Admin only)


<table>
 <tr>
    <td>Admin (House Member with extra permissions)</td>
    <td>House Member</td>
    <td>QR code holds a unique serial number (unique for each user)</td>
  </tr>
  <tr>
    <td><img src="https://i.ibb.co/n0WNZwJ/admin.png"></td>
    <td><img src="https://i.ibb.co/F0dBL9t/member.png"></td>
    <td><img src="https://i.ibb.co/BBLfg8D/qr-code.png"></td>
  </tr>
</table>


#### Circuits
<table>
  <tr>
    <td>
      <b>Lamps Sketch</b> : ./control/microcontrollers/lamps/lamps.ino
    </td>
  </tr>
  <tr>
    <td><img src="https://i.ibb.co/WFHbYtt/leds-circuit.png"></td>
  </tr>
</table>
<table>
  <tr>
    <b>Temperature & Humidity Sketch</b> : ./control/microcontrollers/temperature_humidity/temperature_humidity.ino
  </tr>
  <tr>
    <td><img src="https://i.ibb.co/vd6JTrr/temperature-humidity-circuit.png"></td>
    
  </tr>
</table>
<table>
  <tr>
    <b>Windows Sketch</b> : ./control/microcontrollers/windows/windows.ino
  </tr>
  <tr>
    <td><img src="https://i.ibb.co/r3T6Q4w/servo-circuit.png"></td>
  </tr>
 </table>

## Getting Started

### Home Security Setup

#### Prerequisite
  * [Python](https://www.python.org/)
  * [Arduino IDE](https://www.arduino.cc/en/software/)

1. Clone the project
```
git clone https://github.com/bennaaym/home-automation-system.git
```
2. Set up the circuit base on the given schema & sketch

3. Install Python dependencies    
```
pip install -r security/requirements.txt
```

4. Upload the sketch to the Arduino Uno board & turn on the circuit

5. Run the python Script
```
python -m security.__main__
```

### Home Control Setup

#### Prerequisite
  * [Node.js](https://nodejs.org/en/)
  * [JVM](https://www.java.com/en/download/)


1. Install dependencies
```
npm install
```

2. Run the app
android
```
npx react-native run-android
```
ios
```
npx react-native run-ios 
```

### Firebase Setup
* Create a firebase project
* Update security/database (Add your own : serviceAccountKey.json)
* Update control/react-native-app/src/firebase/firebase.js


## Team

<div align="center">
<table>
  <tr>

<td align="center">
<a href="https://github.com/bennaaym">
<img src="https://avatars.githubusercontent.com/u/68559207?v=4" width="100px;" alt="" style="border-radius:50%"/>
<br />
<sub><b>Aymen Bennabi</b></sub>
</a>
<br />
</td>
<td align="center">
<a href="https://github.com/hajergafsi">
<img src="https://avatars.githubusercontent.com/u/56479423?v=4" width="100px;" alt="" style="border-radius:50%"/>
<br />
<sub><b>Hajer Gafsi</b></sub>
</a>
<br />
</td>
  
</tr>
</table>
</div>




## License

[![MIT License][license-shield]][license-url]<br>
Distributed under the MIT License. See `LICENSE` for more information.



[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/bennaaym/home-automation-system/blob/main/LICENSE



