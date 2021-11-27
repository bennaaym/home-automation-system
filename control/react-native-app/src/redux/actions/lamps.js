import * as actionTypes from "./actionTypes";
import apiServices from "../services/apiServices";

const url = "https://api.thingspeak.com/channels"

export const controlLight = (channelNo,data) => async (dispatch) => { 
    try {
       console.log(data)
        const res = await apiServices.update(channelNo,data)
        dispatch({
            type: actionTypes.SWITCH_LIGHT,
            payload: data
        })  

        return Promise.resolve(res.data);   
    } catch (error) {
        console.log(error);
    }

  
};

export const getLampState = (lampNo,channelNo) => async (dispatch) => {
    try {
      const res = await apiServices.getLastState(lampNo,channelNo);
      switch (lampNo) {
          case 1:
              dispatch({
                    type: actionTypes.GET_KITCHEN_LAMP_STATE,
                    payload: res.data.field1,
              });  
              break;
          case 2:
              dispatch({
                type: actionTypes.GET_LIVINGROOM_LAMP_STATE,
                payload: res.data.field2,
              });             
              break;
          default:
              break;
      }
      return Promise.resolve(res.data);   
    } catch (err) {
      console.log(err);
    }
};