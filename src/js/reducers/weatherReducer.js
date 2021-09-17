import { FETCH_WEATHER_FULFILLED, FETCH_WEATHER_REJECTED } from '../actions/types';

const initialState = {
  temperature: 0,
  pressure: 0,
  humidity: 0,
  lowest_temp: 0,
  highest_temp: 0,
  wind_speed: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_FULFILLED:
      return {
        ...state,
        weather: {
          temperature: action.payload.main.temp,
          pressure: action.payload.main.pressure,
          humidity: action.payload.main.humidity,
          lowest_temp: action.payload.main.temp_min,
          highest_temp: action.payload.main.temp_max,
          wind_speed: action.payload.wind.speed,
        }
      };
    case FETCH_WEATHER_REJECTED:
      return {
        ...state,
        error: 'Oops, try again.'
      };
    default:
      return state;
  }
}
