import React from 'react';

export default class CityBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='blue-bg'>
        <button className='btn blue-btn'>{ this.props.cityName }</button>
      </div>
    );
  }
}
