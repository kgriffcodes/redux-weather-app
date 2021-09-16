import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import CityBtn from './CityBtn';
import { changeCity } from '../actions/actions';

class InputArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityChoice: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onCityClick = this.onCityClick.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // console log that doesn't work:
    console.log('props.cityChoice:', this.props.cityChoice);
  }

  onCityClick(e) {
    this.setState({
      cityChoice: e.target.cityName
    });
    this.props.changeCity(this.props.cityChoice);
    // console log that doesn't work:
    console.log(e.target.cityName);
  }

  onSubmitClick() {
    this.props.getWeather(this.props.cityChoice);
  }

  render() {
    return (
      <div className=''>
        <div className='d-flex flex-row'>
          <CityBtn onClick={ this.onCityClick } cityName='San Diego' />
          <CityBtn onClick={ this.onCityClick } cityName='New York' />
          <CityBtn onClick={ this.onCityClick } cityName='Washington D.C.' />
          <CityBtn onClick={ this.onCityClick } cityName='London' />
          <CityBtn onClick={ this.onCityClick } cityName='Tokyo' />
        </div>
        <div>
          <input
            onChange={ this.onChange }
            name='cityChoice'
            value={ this.props.cityChoice }
            className='col-11'
          />
          <button
            onClick={ this.onSubmitClick }
            className='col-1'
          >
            Go!
          </button>
        </div>
      </div>
    );
  }
}

InputArea.propTypes = {
  changeCity: propTypes.func,
  getWeather: propTypes.func,
  cityChoice: propTypes.string
};

const mapStateToProps = store => ({
  cityChoice: store.cityChoice,
});

export default connect(mapStateToProps, { changeCity })(InputArea);
