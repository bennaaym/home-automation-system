import * as actionTypes from "../actions/actionTypes"; 

const initialState = {
    kitchenWindow : null,
    livingRoomWindow : null,
}

function servoReducer(servos= initialState,action){

    const {type, payload} = action;

    switch (type) { 
        case actionTypes.GET_KITCHEN_WINDOW_STATE:
            servos.kitchenWindow = payload
            return servos
        case actionTypes.GET_LIVINGROOM_WINDOW_STATE:
            servos.livingRoomWindow = payload
           return servos
        case actionTypes.SWITCH_WINDOW: 
            return {payload,...servos}
        default:
          return servos;
      }
}

export default servoReducer;