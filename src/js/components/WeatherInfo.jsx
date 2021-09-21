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
          <h4 className=''>Tokyo</h4>
          <p className='latlong'>Lat/Long: 35.69, 139.69</p>
        </div>
        <div className='weather-deets d-flex align-content-stretch flex-wrap'>
          <WeatherDeet title='Temperature(F)' deets={ this.props.weather.temperature } />
          <WeatherDeet title='Pressure' deets={ this.props.weather.pressure } />
          <WeatherDeet title='Humidity' deets={ this.props.weather.humidity } />
          <WeatherDeet title='Lowest Temp(F)' deets={ this.props.weather.lowest_temp } />
          <WeatherDeet title='Highest Temp(F)' deets={ this.props.weather.highest_temp } />
          <WeatherDeet title='Wind Speed' deets={ this.props.weather.wind_speed } />
        </div>
      </div>
    );
  }
}

const weatherPropShape = {
  temperature: propTypes.number,
  pressure: propTypes.number,
  humidity: propTypes.number,
  lowest_temp: propTypes.number,
  highest_temp: propTypes.number,
  wind_speed: propTypes.number,
  error: propTypes.string
};

WeatherInfo.propTypes = {
  cityFullName: propTypes.string,
  weather: propTypes.shape(weatherPropShape)
};

const mapStoreToProps = store => ({
  cityFullName: store.cityFullName,
  weather: store.weather
});

export default connect(mapStoreToProps)(WeatherInfo);
