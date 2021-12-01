import { useDispatch, useSelector } from "react-redux";
import React  from 'react';
import { controlLight,getLampState } from './actions/lamps';
import { controlWindow,getWindowState } from "./actions/servos";

const channelNo = "1580471";
const apiWriteKey = "E1IEL3E8446RN0I8";

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
        dispatch(getLampState(lampNo,channelNo));
        dispatch(controlLight(channelNo,data))
    
    
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
