const initialState = {};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_WEATHER_FULFILLED':

    case 'GET_WEATHER_REJECTED':

    default:
      return state;
  }
}
