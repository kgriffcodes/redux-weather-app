import axios from 'axios';

const getWeather = () => ({
  type: 'GET_WEATHER',
  payload: axios.get()
});
