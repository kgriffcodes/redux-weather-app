import React from 'react';
import CityBtn from './CityBtn';

export default class InputArea extends React.Component {
  render() {
    return (
      <div className=''>
        <div className='d-flex flex-row'>
          <CityBtn cityName='San Diego' />
          <CityBtn cityName='New York' />
          <CityBtn cityName='Washington D.C.' />
          <CityBtn cityName='London' />
          <CityBtn cityName='Tokyo' />
        </div>
        <div>
          <input className='col-11' />
          <button className='col-1'>Go!</button>
        </div>
      </div>
    );
  }
}
