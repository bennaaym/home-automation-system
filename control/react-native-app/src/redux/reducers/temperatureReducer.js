import * as actionTypes from "../actions/actionTypes"; 

const initialState = {
    kitchenTemperature : null,
    livingRoomTemperature : null
}

function temperatureReducer(temperatureSensor= initialState,action){

    const {type, payload} = action;
    let newState;
    switch (type) { 
        case actionTypes.GET_KITCHEN_TEMPERATURE:
            newState = {...temperatureSensor}
            newState.kitchenTemperature = payload
            return newState
        case actionTypes.GET_LIVINGROOM_TEMPERATURE:
                newState = {...temperatureSensor}
                newState.livingRoomTemperature = payload
            return newState
        default:
            return temperatureSensor;
      }
}

export default temperatureReducer;

