import * as actionTypes from "./actionTypes";
import apiServices from "../services/apiServices";

const url = "https://api.thingspeak.com/channels"

export const getHumidity = (sensorNo,channelNo) => async (dispatch) => {
    try {
      const res = await apiServices.getLastState(sensorNo,channelNo);
              if(sensorNo == 6)
              dispatch({
                    type: actionTypes.GET_KITCHEN_HUMIDITY,
                    payload: res.data.field6,
              });  
              else if(sensorNo == 8)
              dispatch({
                type: actionTypes.GET_LIVINGROOM_HUMIDITY,
                payload: res.data.field8,
              });  
      return Promise.resolve(res.data);   
    } catch (err) {
      console.log(err);
    }
};