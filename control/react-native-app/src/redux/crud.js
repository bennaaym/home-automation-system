import React  from 'react';
import { controlLight,getLampState } from './actions/lamps';
import { controlWindow,getWindowState } from "./actions/servos";
import useThingSpeak from '../hooks/useThingSpeak';
import data from '../variables/User.json'

const channelNo = data.channelNo;
const apiWriteKey = data.apiWriteKey;

const headers = {
    'Content-Type': 'application/json',
  }

//turning lamps off and on
export function switchLight (lampNo,lampState,dispatch){
        const no = parseInt(lampNo)
        let date = new Date() ;
        let data;
        switch (no) {
          case 1:
            if(lampState == 0){
              data = 
              {
                  write_api_key: apiWriteKey,
                  updates: [{
                        created_at: `${date}` ,
                        field1: 1
                      }
                    ]
                }
              }else if(lampState == 1){
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
            if(lampState == 0){
              data = 
              {
                  write_api_key: apiWriteKey,
                  updates: [{
                        created_at: `${date}` ,
                        field2: 1
                      }
                    ]
                }
              }else if(lampState == 1){
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

//turning Windows off and on
export function switchWindow(windowNo,windowState,dispatch){
    let date = new Date() ;
    let data;
    const no = parseInt(windowNo);
    switch (no) {
    case 1:
        if(windowState == 0){
        data = 
        {
            write_api_key: apiWriteKey,
            updates: [{
                    created_at: `${date}` ,
                    field4: 180
                }
                ]
            }
        }else if(windowState == 180){
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
        if(windowState == 0){
        data = 
        {
            write_api_key: apiWriteKey,
            updates: [{
                    created_at: `${date}` ,
                    field5: 180
                }
                ]
            }
        }else if(windowState == 180){
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
dispatch(getWindowState(windowNo,channelNo));
//dispatch(getWindowState(2,channelNo));
}

export const turnOffLights = (dispatch) => {
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

export const getLampStateExpression = (lampNo) => {
  const state = lampNo == 1 ? state => state.lampReducer.kitchenLamp : 
  (lampNo == 2 ? state => state.lampReducer.livingRoomLamp:null) 
  return state;
}

export const getWindowStateExpression = (windowNo) => {
  const state = windowNo == 1 ? state => state.servoReducer.kitchenWindow : 
  (windowNo == 2 ? state => state.servoReducer.livingRoomWindow:null) 
  return state;
}
