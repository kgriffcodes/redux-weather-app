import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import CityBtn from './CityBtn';
import { changeCity, fetchWeather } from '../actions/actions';

class InputArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityFullName: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onChange(e) {
    this.setState({
      cityFullName: e.target.value,
    });
  }

  onSubmitClick() {
    // convert full city name to  shortcode before passing to api call
    const cityCopy = this.state.cityFullName;
    const cityShortCode = cityCopy.replace(' ', '+').replace(/\./g, '');

    // make api call
    this.props.onSubmitClick(cityCopy, cityShortCode);
  }

  handleCityClick(e) {
    this.setState({
      cityFullName: e.target.innerText,
    });
    this.props.handleCityClick(this.state.cityFullName);
  }

  render() {
    return (
      <div className=''>
        <div className='d-flex flex-row'>
          <CityBtn
            onClick={ e => this.handleCityClick(e) }
            cityName='San Diego'
          />
          <CityBtn
            onClick={ e => this.handleCityClick(e) }
            cityName='New York'
          />
          <CityBtn
            onClick={ e => this.handleCityClick(e) }
            cityName='Washington D.C.'
          />
          <CityBtn
            onClick={ e => this.handleCityClick(e) }
            cityName='London'
          />
          <CityBtn
            onClick={ e => this.handleCityClick(e) }
            cityName='Tokyo'
          />
        </div>
        <div>
          <input
            onChange={ this.onChange }
            name='cityChoice'
            className='col-11'
            value={ this.state.cityFullName }
          />
          <button onClick={ this.onSubmitClick } className='col-1'>
            Go!
          </button>
        </div>
      </div>
    );
  }
}

InputArea.propTypes = {
  city: propTypes.objectOf(propTypes.string),
  cityCode: propTypes.string,
  dispatch: propTypes.func,
  onSubmitClick: propTypes.func,
  changeCity: propTypes.func,
  handleCityClick: propTypes.func,
};

const mapStoreToProps = store => ({
  city: store.city,
});

const mapDispatchToProps = dispatch => ({
  onSubmitClick: (cityCopy, cityShortCode) => {
    dispatch(changeCity(cityCopy));
    dispatch(fetchWeather(cityShortCode));
  },
  handleCityClick: (cityName) => {
    dispatch(changeCity(cityName));
  }
});

export default connect(mapStoreToProps, mapDispatchToProps)(InputArea);
