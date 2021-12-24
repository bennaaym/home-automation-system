import * as actionTypes from "./actionTypes";
import apiServices from "../services/apiServices";

const url = "https://api.thingspeak.com/channels"

export const getTemperature = (sensorNo,channelNo) => async (dispatch) => {
    try {
      const res = await apiServices.getLastState(sensorNo,channelNo);
              if(sensorNo == 3)
              dispatch({
                    type: actionTypes.GET_KITCHEN_TEMPERATURE,
                    payload: res.data.field3,
              });  
              else if(sensorNo == 7)
              dispatch({
                    type: actionTypes.GET_LIVINGROOM_TEMPERATURE,
                    payload: res.data.field7,
              }); 
      return Promise.resolve(res.data);   
    } catch (err) {
      console.log(err);
    }
};