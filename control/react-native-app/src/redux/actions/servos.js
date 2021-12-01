import * as actionTypes from "./actionTypes";
import apiServices from "../services/apiServices";

const url = "https://api.thingspeak.com/channels"

export const controlWindow = (channelNo,data) => async (dispatch) => { 
    try {
        console.log(data)
        const res = await apiServices.update(channelNo,data)
        dispatch({
            type: actionTypes.SWITCH_WINDOW,
            payload: data
        })  
        alert(data.updates[0].field4 == 0? "window closed" : "window opened")
        return Promise.resolve(res.data);   
    } catch (error) {
        console.log(error);
    }

  
};

export const getWindowState = (windowNo,channelNo) => async (dispatch) => {
    try {
      const no = parseInt(windowNo); 
      const res = await apiServices.getLastState(no+3,channelNo);
     
      switch (no) {
          case 1:
              dispatch({
                    type: actionTypes.GET_KITCHEN_WINDOW_STATE,
                    payload: res.data.field4,
              });  
              break;
          case 2:
              dispatch({
                type: actionTypes.GET_LIVINGROOM_WINDOW_STATE,
                payload: res.data.field5,
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