import {combineReducers} from 'redux';
import lampReducer from './lampReducer';
import servoReducer from './servoReducer';
import temperatureReducer from './temperatureReducer';
 
const reducers = combineReducers({
  lampReducer,
  servoReducer,
  temperatureReducer
});
export default reducers;