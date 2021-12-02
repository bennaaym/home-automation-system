import axios from 'axios';
import { AppButton } from './Button';
import { useDispatch, useSelector } from "react-redux";
import {switchWindow} from "../redux/crud"
import React  from 'react';
import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import useThingSpeak from '../hooks/useThingSpeak';

const Window = ({windowNo}) => {
  const dispatch = useDispatch()
  const state = windowNo == 1 ? state => state.servoReducer.kitchenWindow : 
  (windowNo == 2 ? state => state.servoReducer.livingRoomWindow:null) 

  const window = (windowNo != undefined) ? useSelector(state) : null;
  //useThingSpeak(null,windowNo)

  useEffect(() => {
    console.log(window);
  })

  return (
     (window != null)?(      
        <View>
            <Text style={styles.subtitle}> Windows </Text>
            <View style={styles.buttonGroup}>
                <AppButton onPress={() => {switchWindow(windowNo,window,dispatch)}} 
                title ={`${window==180?'Close':'Open'}`} color="#FF876E" textColor="#000" />     
            </View>
        </View>)
    :null
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

export default Window;