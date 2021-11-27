import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { AppButton } from './src/components/Button';
import { useDispatch, useSelector } from "react-redux";
import React  from 'react';
import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
import Lights from './src/components/Lights';
import Windows from './src/components/Windows';
import TemperatureReader from './src/components/TemperatureReader';

const channelNo = "1580471";
const apiWriteKey = "E1IEL3E8446RN0I8";

export default function App() {
  const dispatch = useDispatch();
  
  const [tempertaure, setTemperature] = useState(null);


  useEffect(() => {
    axios.get(`https://api.thingspeak.com/channels/1580471/fields/3/last.json`).then((response) => {  
    setTemperature(response.data.field3);
  })})

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home automation app</Text>
        <Lights />
        <Windows /> 
        <TemperatureReader />
      <StatusBar style="auto" />
    </View>
  );
}

const headers = {
  'Content-Type': 'application/json',
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title :{
    fontSize: 16,
    fontWeight:'bold',
    color: '#000',
    margin: 10
  }
});


