import {combineReducers} from 'redux';
import lampReducer from './lampReducer';
import servoReducer from './servoReducer';
import temperatureReducer from './temperatureReducer';
import humidityReducer from './humidityReducer';
import modalReducer from './modalReducer';
import userReducer from '../../firebase/redux/reducers/userReducer'
 
const reducers = combineReducers({
  lampReducer,
  servoReducer,
  temperatureReducer,
  humidityReducer,
  modalReducer,
  userReducer
});
export default reducers;