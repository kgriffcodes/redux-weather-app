import React from 'react';
import propTypes from 'prop-types';

export default class WeatherDeet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='weather-deet-container text-center'>
        <p>{ this.props.title }</p>
        <p className='green-text'>{ this.props.deets }</p>
      </div>
    );
  }
}

WeatherDeet.propTypes = {
  title: propTypes.string,
  deets: propTypes.number
};
