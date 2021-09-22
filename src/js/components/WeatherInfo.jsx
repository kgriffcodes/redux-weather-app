import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import WeatherDeet from './WeatherDeet';

class WeatherInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='subcontainer col-5 p-0'>
        <div className='subheader-container subheader-bg p-2'>
          <h3 className='subheader'>City Information</h3>
        </div>
        <div className='pt-5 pb-4 weather-city text-center'>
          <h4 className=''>{ this.props.city.city }</h4>
          <p className='latlong'>Lat/Long: {this.props.weather.data.coord.lat }/{this.props.weather.data.coord.lon }</p>
        </div>
        <div className='weather-deets d-flex align-content-stretch flex-wrap'>
          <WeatherDeet title='Temperature(F)' deets={ this.props.weather.data.main.temp } />
          <WeatherDeet title='Pressure' deets={ this.props.weather.data.main.pressure } />
          <WeatherDeet title='Humidity' deets={ this.props.weather.data.main.humidity } />
          <WeatherDeet title='Lowest Temp(F)' deets={ this.props.weather.data.main.temp_min } />
          <WeatherDeet title='Highest Temp(F)' deets={ this.props.weather.data.main.temp_max } />
          <WeatherDeet title='Wind Speed' deets={ this.props.weather.data.wind.speed } />
        </div>
      </div>
    );
  }
}

// {
// {
//       coord: {
//         lon: -0.1257,
//         lat: 51.5085
//       },
//       weather: [
//         {
//           id: 801,
//           main: 'Clouds',
//           description: 'few clouds',
//           icon: '02d'
//         }
//       ],
//       base: 'stations',
//       main: {
//         temp: 69.35,
//         feels_like: 68.85,
//         temp_min: 66.11,
//         temp_max: 71.58,
//         pressure: 1026,
//         humidity: 61
//       },
//       visibility: 10000,
//       wind: {
//         speed: 11.5,
//         deg: 230
//       },
//       clouds: {
//         all: 20
//       },
//       dt: 1632327486,
//       sys: {
//         type: 2,
//         id: 2019646,
//         country: 'GB',
//         sunrise: 1632289602,
//         sunset: 1632333586
//       },
//       timezone: 3600,
//       id: 2643743,
//       name: 'London',
//       cod: 200
//     },
//     status: 200,
//     statusText: 'OK',
//     headers: {
//       'content-length': '469',
//       'content-type': 'application/json; charset=utf-8'
//     },
//     config: {
//       transformRequest: {},
//       transformResponse: {},
//       timeout: 0,
//       xsrfCookieName: 'XSRF-TOKEN',
//       xsrfHeaderName: 'X-XSRF-TOKEN',
//       maxContentLength: -1,
//       headers: {
//         Accept: 'application/json, text/plain, */*'
//       },
//       method: 'get',
//       url: 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=7728aa4739a188b45a3ab73e15b09df0&units=imperial'
//     },
//     request: {}
//   },
//   history: {
//     history: []
//   }
//

const weathDataPropShape = {
  coord: propTypes.objectOf(propTypes.number),
};

const weatherPropShape = {
  data: propTypes.shape(weathDataPropShape),
  error: propTypes.string
};

WeatherInfo.propTypes = {
  city: propTypes.objectOf(propTypes.string),
  weather: propTypes.shape(weatherPropShape)
};

const mapStoreToProps = store => ({
  city: store.city,
  weather: store.weather
});

export default connect(mapStoreToProps)(WeatherInfo);
