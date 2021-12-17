import * as actionTypes from "../actions/actionTypes"; 

const initialState = {
    humidity : null
}

function humidityReducer(humiditySensor= initialState,action){

    const {type, payload} = action;

    switch (type) { 
        case actionTypes.GET_HUMIDITY:
            const newState = {...humiditySensor}
            newState.humidity = payload
            return newState
        default:
            return humiditySensor;
      }
}

export default humidityReducer;

