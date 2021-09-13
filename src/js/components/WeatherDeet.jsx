import React from 'react';

export default class WeatherDeet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='weather-deet-container text-center'>
        <p>{ this.props.title }</p>
        <p className='green-text'>Result</p>
      </div>
    );
  }
}
