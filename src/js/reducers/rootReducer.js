import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  cityChoice: cityReducer,
  temperature: weatherReducer,
  pressure: weatherReducer,
  humidity: weatherReducer,
  lowest_temp: weatherReducer,
  highest_temp: weatherReducer,
  wind_speed: weatherReducer,
  weather: weatherReducer
});

export default rootReducer;
