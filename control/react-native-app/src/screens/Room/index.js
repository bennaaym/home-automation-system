import axios from 'axios';
import React,{useEffect, useState}  from 'react';
import Banner from '../../utils/Banner';
import { roomStyles } from '../../styles/RoomStyle';
import { StyleSheet, Text, View, Button,StatusBar, TouchableOpacity, ScrollView,SafeAreaView } from 'react-native';
import DeviceWidget from '../../components/DeviceWidget';
import TemperatureReader from '../../components/TemperatureReader';
import useThingSpeak from '../../hooks/useThingSpeak';
import rooms from '../../variables/Rooms.json'


const Room = ({route}) => {
  const {name,lampNo,windowNo=null,devices=null} = route.params
  console.log(devices)
  useThingSpeak(lampNo,windowNo)
  return (
    <View style={roomStyles.container} >
      <Banner title={name} description="3 devices connected" />
        <ScrollView style={roomStyles.widgetContainer} horizontal={true}  >
          {devices?(devices.map((item) => {       
            return(<DeviceWidget key={item.id} icon={item.icon} deviceNo={item.deviceNo} type={item.type}/>)
          })):""}
        </ScrollView>
    </View>
  );
}


export default Room ;