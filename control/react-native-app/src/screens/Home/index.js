import { StatusBar } from 'expo-status-bar';
import rooms from '../../variables/Rooms.json'
import React  from 'react';
import data from "../../variables/User.json";
import {  View, Button, TouchableOpacity, TouchableHighlight, Text } from 'react-native';
import RoomWidget from '../../components/RoomWidget'
import { SettingsModal } from '../../components/SettingsModal';
import { Alert } from "react-native";
import{ styles }from '../../styles/HomeStyle';
import Banner from '../../utils/Banner';
import auth from '@react-native-firebase/auth'
import { getUserByUid } from '../../firebase/actions/dbActions';




const Home = (props) =>{
  const {navigation} = props;
  const uid = auth().currentUser.uid
  const username = getUserByUid(uid)
  let lamp,window=null;
  return (
    <View style={styles.container}>
      <Banner title={`Hello ${username} !`} description={"let's manage your smart home "} />
      <SettingsModal props={props}/>
        <View style={styles.roomContainer}>
          {rooms.map((room)=> {
            room.devices.map((device)=>{(device.type == "Lamp")?lamp=device.deviceNo:((device.type == "Window")?window=device.deviceNo:"")});
            return(<RoomWidget key={room.name} devices={room.devices} name={room.name} lampNo={lamp} windowNo={window} icon={room.icon} props={props} />)
          })}
          <RoomWidget icon="house-user" props={props} />
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default Home

