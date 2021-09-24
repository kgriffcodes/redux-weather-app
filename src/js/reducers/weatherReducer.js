import { FETCH_WEATHER_FULFILLED, FETCH_WEATHER_REJECTED } from '../actions/types';

const error = 'Weather Data Could Not Be Found';

const initialState = {
  data: {
    coord: {
      lon: 0,
      lat: 0
    },
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0
    },
    wind: {
      speed: 0,
    }
  }
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_FULFILLED:
      return action.payload;
    case FETCH_WEATHER_REJECTED:
      return error;
    default:
      return state;
  }
}
