import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  cityChoice: cityReducer,
  weather: weatherReducer
});

export default rootReducer;
