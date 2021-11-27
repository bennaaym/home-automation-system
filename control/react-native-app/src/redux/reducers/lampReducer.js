import * as actionTypes from "../actions/actionTypes"; 

//led1 blue kitchen
//led2 red livingroom

const initialState = {
    kitchenLamp : null,
    livingRoomLamp : null
}

function lampReducer(lamps= initialState,action){

    const {type, payload} = action;
    let newState;

    switch (type) { 
        case actionTypes.GET_KITCHEN_LAMP_STATE:
            newState = {...lamps}
            newState.kitchenLamp = payload
            return newState
        case actionTypes.GET_LIVINGROOM_LAMP_STATE:
            newState = {...lamps}
            newState.livingRoomLamp = payload
            return newState
        case actionTypes.SWITCH_LIGHT: 
            return {payload,...lamps}
        default:
          return lamps;
      }
}

export default lampReducer;

