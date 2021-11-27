import * as actionTypes from "../actions/actionTypes"; 

const initialState = {
    temperature : null
}

function temperatureReducer(temperatureSensor= initialState,action){

    const {type, payload} = action;

    switch (type) { 
        case actionTypes.GET_TEMPERATURE:
            const newState = {...temperatureSensor}
            newState.temperature = payload
            return newState
        default:
            return temperatureSensor;
      }
}

export default temperatureReducer;

