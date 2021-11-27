import * as actionTypes from "../actions/actionTypes"; 

//led1 blue kitchen
//led2 red livingroom

const initialState = {
    kitchenLamp : null,
    livingRoomLamp : null
}

function lampReducer(lamps= initialState,action){

    const {type, payload} = action;

    switch (type) { 
        case actionTypes.GET_KITCHEN_LAMP_STATE:
            lamps.kitchenLamp = payload
            return lamps
        case actionTypes.GET_LIVINGROOM_LAMP_STATE:
            lamps.livingRoomLamp = payload
           return lamps
        case actionTypes.SWITCH_LIGHT: 
            return {payload,...lamps}
        default:
          return lamps;
      }
}

export default lampReducer;

