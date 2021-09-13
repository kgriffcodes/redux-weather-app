import React from 'react';
import Header from './components/Header';
import InputArea from './components/InputArea';
import SearchHistory from './components/SearchHistory';
import WeatherInfo from './components/WeatherInfo';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='col-12 mb-5'>
          <Header />
          <div className='mt-5'>
            <InputArea />
            <div className='mt-5 col-12 d-flex flex-row justify-content-around'>
              <WeatherInfo />
              <SearchHistory />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
