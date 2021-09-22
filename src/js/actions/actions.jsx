import axios from 'axios';

export const fetchWeather = cityShortCode => ({
  type: 'FETCH_WEATHER',
  payload: axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityShortCode}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`)
});

// export const fetchWeather = cityName => (
//   console.log('fetching weather data for: ', cityName)
// );

export const changeCity = cityFullName => ({
  type: 'CHANGE_CITY',
  payload: {
    city: cityFullName
  }
});

export const updateHistory = (cityFullName, dateStamp, timeStamp) => ({
  type: 'UPDATE_HISTORY',
  payload: {
    history: [{ cityFullName, dateStamp, timeStamp }]
  }
});
