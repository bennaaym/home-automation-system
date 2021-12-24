import * as actionTypes from "../actions/actionTypes"; 

const initialState = {
    kitchenHumidity : null,
    livingRoomHumidity : null
}

function humidityReducer(humiditySensor= initialState,action){

    const {type, payload} = action;
    let newState
    switch (type) { 
        case actionTypes.GET_KITCHEN_HUMIDITY:
            newState = {...humiditySensor}
            newState.kitchenHumidity = payload
            return newState
        case actionTypes.GET_LIVINGROOM_HUMIDITY:
            newState = {...humiditySensor}
            newState.livingRoomHumidity = payload
            return newState
        default:
            return humiditySensor;
      }
}

export default humidityReducer;

