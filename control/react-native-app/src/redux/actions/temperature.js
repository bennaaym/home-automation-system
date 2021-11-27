import * as actionTypes from "./actionTypes";
import apiServices from "../services/apiServices";

const url = "https://api.thingspeak.com/channels"

export const getTempertaure = (sensorNo,channelNo) => async (dispatch) => {
    try {
      const res = await apiServices.getLastState(sensorNo,channelNo);
              dispatch({
                    type: actionTypes.GET_TEMPERATURE,
                    payload: res.data.field3,
              });  
      return Promise.resolve(res.data);   
    } catch (err) {
      console.log(err);
    }
};