import { StatusBar } from 'expo-status-bar';
import rooms from '../../variables/Rooms.json'
import React  from 'react';
import data from "../../variables/User.json";
import {  View, Button, TouchableOpacity } from 'react-native';
import RoomWidget from '../../components/RoomWidget'
import{ styles }from '../../styles/HomeStyle';
import Banner from '../../utils/Banner';


const username = "hajer"
const Home = (props) =>{
  const {navigation} = props;
  let lamp,window=null;
  return (
    <View style={styles.container}>
      <Banner title={`Hello ${data.username} !`} description={"let's manage your smart home "} />
        <View style={styles.roomContainer}>
          {rooms.map((room)=> {
            room.devices.map((device)=>{(device.type == "Lamp")?lamp=device.deviceNo:((device.type == "Window")?window=device.deviceNo:"")});
            return(<RoomWidget key={room.name} devices={room.devices} name={room.name} lampNo={lamp} windowNo={window} icon={room.icon} props={props} />)
          })}
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default Home

