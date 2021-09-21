import React from 'react';
import propTypes from 'prop-types';

export default class CityBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='blue-bg'>
        <button
          onClick={ this.props.onClick }
          value={ this.props.value }
          className='btn blue-btn'
        >
          { this.props.cityName }
        </button>
      </div>
    );
  }
}

CityBtn.propTypes = {
  onClick: propTypes.func,
  cityName: propTypes.string,
  value: propTypes.string
};
