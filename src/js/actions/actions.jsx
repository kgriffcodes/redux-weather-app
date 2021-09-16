import axios from 'axios';
import { GET_WEATHER, CHANGE_CITY } from '../actions/types';

export const getWeather = cityName => ({
  type: 'GET_WEATHER',
  payload: axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`)
});

export const changeCity = cityChoice => ({
  type: 'CHANGE_CITY',
  payload: cityChoice
});
