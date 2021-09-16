import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import WeatherDeet from './WeatherDeet';

class WeatherInfo extends React.Component {
  render() {
    return (
      <div className='subcontainer col-5 p-0'>
        <div className='subheader-container subheader-bg p-2'>
          <h3 className='subheader'>City Information</h3>
        </div>
        <div className='pt-5 pb-4 weather-city text-center'>
          <h4 className=''>{ this.props.cityChoice }</h4>
          <p className='latlong'>Lat/Long: 35.69, 139.69</p>
        </div>
        <div className='weather-deets d-flex align-content-stretch flex-wrap'>
          <WeatherDeet title='Temperature(F)' deets={ this.props.temperature } />
          <WeatherDeet title='Pressure' deets={ this.props.pressure } />
          <WeatherDeet title='Humidity' deets={ this.props.humidity } />
          <WeatherDeet title='Lowest Temp(F)' deets={ this.props.lowest_temp } />
          <WeatherDeet title='Highest Temp(F)' deets={ this.props.highest_temp } />
          <WeatherDeet title='Wind Speed' deets={ this.props.wind_speed } />
        </div>
      </div>
    );
  }
}

WeatherInfo.propTypes = {
  cityChoice: propTypes.string,
  temperature: propTypes.number,
  pressure: propTypes.number,
  humidity: propTypes.number,
  lowest_temp: propTypes.number,
  highest_temp: propTypes.number,
  wind_speed: propTypes.number
};

const mapStateToProps = store => ({
  cityChoice: store.cityChoice,
  temperature: store.temperature,
  pressure: store.pressure,
  humidity: store.humidity,
  lowest_temp: store.lowest_temp,
  highest_temp: store.highest_temp,
  wind_speed: store.wind_speed
});

export default connect(mapStateToProps)(WeatherInfo);
