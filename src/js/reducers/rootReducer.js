import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import historyReducer from './historyReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  city: cityReducer,
  weather: weatherReducer,
  history: historyReducer
});

export default rootReducer;
