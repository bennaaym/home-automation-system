import axios from 'axios';
import { AppButton } from './Button';
import { useDispatch, useSelector } from "react-redux";
import React  from 'react';
import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { getTemperature } from '../redux/actions/temperature';

const channelNo = "1580471";
const apiWriteKey = "E1IEL3E8446RN0I8";


const TemperatureReader = () => {

  const dispatch = useDispatch();
  const temperature = useSelector(state => state.temperatureReducer.temperature)
  
  useEffect(() => {
    dispatch(getTemperature(3,channelNo));
  });

  useEffect(() => {
    console.log(temperature);
  })

  return (
      <View>
        <Text style={styles.subtitle}> Temperature </Text>
        <View style={styles.temperature}>
          <Text style={{color:'#fff',fontSize: 20}}>{temperature}°C</Text>
        </View> 
    </View>
  );
}


const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row'
  },
  buttons: {
    fontSize: 10
  },
  subtitle : {
    textAlign: 'center',
    fontSize:14,
    color: 'blue',
    marginTop: 20
  },
  temperature: {
    marginTop:12,
    height: 50,
    paddingLeft: 10,
    width: 150,
    backgroundColor: '#001', 
    justifyContent: 'center',
    borderRadius: 20
  },
});

export default TemperatureReader;


