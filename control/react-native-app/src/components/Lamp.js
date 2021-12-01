import axios from 'axios';
import { AppButton } from './Button';
import { useDispatch, useSelector } from "react-redux";
import React  from 'react';
import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { controlLight,getLampState } from '../redux/actions/lamps';

const channelNo = "1580471";
const apiWriteKey = "E1IEL3E8446RN0I8";

const headers = {
    'Content-Type': 'application/json',
  }

const Lamp = ({lampNo,color}) => {
  const dispatch = useDispatch();
  const state = lampNo == 1 ? state => state.lampReducer.kitchenLamp : 
  (lampNo == 2 ? state => state.lampReducer.livingRoomLamp:null) 
  const Lamp = (state!=null) ? useSelector(state) : null;

  useEffect(() => {
    dispatch(getLampState(lampNo,channelNo));
  },[state => state.lampReducer]);

  useEffect(() => {
    console.log(Lamp);
  })

  //turning lamps off and on
  const switchLight = () => {
      const no = parseInt(lampNo)
      let date = new Date() ;
      let data;
      switch (no) {
        case 1:
          if(Lamp == 0){
            data = 
            {
                write_api_key: apiWriteKey,
                updates: [{
                      created_at: `${date}` ,
                      field1: 1
                    }
                  ]
              }
            }else if(Lamp == 1){
              data = 
              {
                  write_api_key: apiWriteKey,
                  updates: [{
                        created_at: `${date}` ,
                        field1: 0
                      }
                    ]
                }
            }
          break;
        case 2:
          if(Lamp == 0){
            data = 
            {
                write_api_key: apiWriteKey,
                updates: [{
                      created_at: `${date}` ,
                      field2: 1
                    }
                  ]
              }
            }else if(Lamp == 1){
              data = 
              {
                  write_api_key: apiWriteKey,
                  updates: [{
                        created_at: `${date}` ,
                        field2: 0
                      }
                    ]
                }
            }
        default:
          break;
      }
    dispatch(controlLight(channelNo,data))
    dispatch(getLampState(lampNo,channelNo));
  }

  const turnOffLights = () => {
    let date = new Date() ;
    const data =  {
      write_api_key: apiWriteKey,
      updates: [{
            created_at: `${date}` ,
            field1: 0,
            field2: 0
          }
        ]
    }
    dispatch(controlLight(channelNo,data))
    dispatch(getLampState(1,channelNo));
    dispatch(getLampState(2,channelNo));
  }

  return (
      <View>
        <Text style={styles.subtitle}> Lights </Text>
        <View style={styles.buttonGroup}>
          <AppButton onPress={() => {switchLight(lampNo)}} title ={`${Lamp==1?'off':'on'}`} color={color} />
          <AppButton onPress={turnOffLights} textColor="#000" title="Lights off" color="#ccc" />
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