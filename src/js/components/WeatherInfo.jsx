import React from 'react';
import WeatherDeet from './WeatherDeet';

export default class WeatherInfo extends React.Component {
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
          <WeatherDeet title='Temperature(F)' />
          <WeatherDeet title='Pressure' />
          <WeatherDeet title='Humidity' />
          <WeatherDeet title='Lowest Temp(F)' />
          <WeatherDeet title='Highest Temp(F)' />
          <WeatherDeet title='Wind Speed' />
        </div>
      </div>
    );
  }
}
