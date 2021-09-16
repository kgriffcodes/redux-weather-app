import axios from 'axios';

const getWeather = () => ({
  type: 'GET_WEATHER',
  payload: axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`)
});

const changeCity = (cityChoice) => ({
  type: 'CHANGE_CITY',
  payload: cityChoice
});
