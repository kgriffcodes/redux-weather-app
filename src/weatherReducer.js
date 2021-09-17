const error = 'Weather Data Could Not Be Found';

const initialState = {
  weather: {}
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_WEATHER_FULFILLED':
      return action.payload;
    case 'FETCH_WEATHER_REJECTED':
      return error;
    default:
      return state;
  }
}
