import axios from 'axios';
import { AppButton } from './Button';
import { useDispatch, useSelector } from "react-redux";
import React  from 'react';
import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { controlWindow,getWindowState } from '../redux/actions/servos';

const channelNo = "1580471";
const apiWriteKey = "E1IEL3E8446RN0I8";

const headers = {
    'Content-Type': 'application/json',
  }

const Windows = () => {

  const dispatch = useDispatch();
  const kitchenWindow = useSelector(state => state.servoReducer.kitchenWindow)
  const LRWindow = useSelector(state => state.servoReducer.livingRoomWindow)

  useEffect(() => {
    dispatch(getWindowState(1,channelNo));
    //dispatch(getWindowState(2,channelNo));
  });

  useEffect(() => {
    console.log(kitchenWindow);
    //console.log(LRWindow)
  })

  //turning Windows off and on
  const switchWindow = (WindowNo) => {
      let date = new Date() ;
      let data;
      switch (WindowNo) {
        case 1:
          if(kitchenWindow == 0){
            data = 
            {
                write_api_key: apiWriteKey,
                updates: [{
                      created_at: `${date}` ,
                      field4: 180
                    }
                  ]
              }
            }else if(kitchenWindow == 180){
              data = 
              {
                  write_api_key: apiWriteKey,
                  updates: [{
                        created_at: `${date}` ,
                        field4: 0
                      }
                    ]
                }
            }
          break;
        case 2:
          if(LRWindow == 0){
            data = 
            {
                write_api_key: apiWriteKey,
                updates: [{
                      created_at: `${date}` ,
                      field5: 180
                    }
                  ]
              }
            }else if(LRWindow == 180){
              data = 
              {
                  write_api_key: apiWriteKey,
                  updates: [{
                        created_at: `${date}` ,
                        field5: 0
                      }
                    ]
                }
            }
        default:
          break;
      }
    dispatch(controlWindow(channelNo,data))
    dispatch(getWindowState(1,channelNo));
    //dispatch(getWindowState(2,channelNo));
  }

  return (
      <View>
        <Text style={styles.subtitle}> Windows </Text>
        <View style={styles.buttonGroup}>
          <AppButton onPress={() => {switchWindow(1)}} title ={`${kitchenWindow==180?'Close':'Open'}`} color="#FF876E" textColor="#000" />
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

export default Windows;
