import axios from 'axios';
import { AppButton } from './Button';
import { useDispatch, useSelector } from "react-redux";
import React  from 'react';
import {switchLight,turnOffLights} from "../redux/crud"
import useThingSpeak from '../hooks/useThingSpeak';
import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { controlLight,getLampState } from '../redux/actions/lamps';


const Lamp = ({lampNo,color}) => {
  const dispatch = useDispatch();

  const state = lampNo == 1 ? state => state.lampReducer.kitchenLamp : 
  (lampNo == 2 ? state => state.lampReducer.livingRoomLamp:null) 
  const Lamp = (state != null) ? useSelector(state) : null;
  
  useThingSpeak(lampNo)
  
  useEffect(() => {
    console.log(Lamp);
  })

  return (
      <View>
        <Text style={styles.subtitle}> Lights </Text>
        <View style={styles.buttonGroup}>
          <AppButton onPress={() => {switchLight(lampNo,Lamp,dispatch)}} title ={`${Lamp==1?'off':'on'}`} color={color} />
          <AppButton onPress={() => turnOffLights(dispatch)} textColor="#000" title="Lights off" color="#ccc" />
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
  }
});

export default Lamp;