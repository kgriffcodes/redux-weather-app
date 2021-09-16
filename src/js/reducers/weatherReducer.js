import { GET_WEATHER_FULFILLED, GET_WEATHER_REJECTED } from '../actions/types';

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
    case GET_WEATHER_FULFILLED:
      return {
        ...state,
        temperature: action.payload.main.temp,
        pressure: action.payload.main.pressure,
        humidity: action.payload.main.humidity,
        lowest_temp: action.payload.main.temp_min,
        highest_temp: action.payload.main.temp_max,
        wind_speed: action.payload.wind.speed
      };
    case GET_WEATHER_REJECTED:
      return state;
    default:
      return state;
  }
}
