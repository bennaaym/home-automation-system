import {combineReducers} from 'redux';
import lampReducer from './lampReducer';
import servoReducer from './servoReducer';
import temperatureReducer from './temperatureReducer';
import humidityReducer from './humidityReducer';
 
const reducers = combineReducers({
  lampReducer,
  servoReducer,
  temperatureReducer,
  humidityReducer
});
export default reducers;