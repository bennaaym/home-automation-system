import * as actionTypes from "../actions/actionTypes"; 

const initialState = {
    temperature : null
}

function temperatureReducer(temperatureSensor= initialState,action){

    const {type, payload} = action;

    switch (type) { 
        case actionTypes.GET_TEMPERATURE:
            temperatureSensor.temperature = payload
            return temperatureSensor
        default:
            return temperatureSensor;
      }
}

export default temperatureReducer;

