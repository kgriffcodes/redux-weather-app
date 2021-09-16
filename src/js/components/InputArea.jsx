import React from 'react';
import CityBtn from './CityBtn';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

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
  }

  onCityClick(e) {
    this.setState({
      cityChoice: e.target.cityName
    });
    this.props.changeCity(this.state.cityChoice);
    console.log(e.target.cityName);
  }

  onSubmitClick() {
    const cityChoice = {

    }
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
          <input onChange={ this.onChange } name='cityChoice' value={ this.state.cityChoice } className='col-11' />
          <button onClick={ this.onSubmitClick } className='col-1'>Go!</button>
        </div>
      </div>
    );
  }
}

InputArea.propTypes = {
  changeCity: propTypes.func
};

export default connect()(InputArea);
