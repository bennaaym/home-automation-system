import axios from 'axios';
import React,{useEffect, useState}  from 'react';
import Banner from '../../utils/Banner';
import { roomStyles } from '../../styles/RoomStyle';
import { ListElement } from '../../utils/ListElement';
import { FlatList, Text, View, Button,StatusBar, TouchableOpacity, ScrollView,SafeAreaView } from 'react-native';
import DeviceWidget from '../../components/DeviceWidget';
import TemperatureDisplay from '../../components/TemperatureDisplay';
import HumidityDisplay from '../../components/HumidityDisplay';
import useThingSpeak from '../../hooks/useThingSpeak';
import rooms from '../../variables/Rooms.json'


const Room = ({route,navigation}) => {
  const {name,lampNo,windowNo=null,devices=null} = route.params
  console.log(navigation)
  useThingSpeak(lampNo,windowNo)
  return (
    <View style={roomStyles.container} >
      <Banner title={name} description={`${devices.length} devices connected`} />
          <FlatList style={roomStyles.flatList} data={rooms} keyExtractor={item => item.name} horizontal renderItem={({item}) => (<ListElement name={item.name} current={name} props={navigation} lampNo={lampNo} windowNo={windowNo} devices={item.devices}/>)} />
          <ScrollView style={roomStyles.temperatureContainer} horizontal={true}  >
            <TemperatureDisplay />
            <HumidityDisplay />
          </ScrollView>
          <ScrollView style={roomStyles.widgetContainer} horizontal={true}  >
            {devices?(devices.map((item) => {       
              return(<DeviceWidget key={item.id} icon={item.icon} deviceNo={item.deviceNo} type={item.type}/>)
            })):""}
          </ScrollView>
        
    </View>
  );
}


export default Room ;