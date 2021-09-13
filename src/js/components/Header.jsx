import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className='mt-5 p-5 grey-bg header-container'>
        <h1>Origin Weather</h1>
        <h2 className='header-2 pl-3'>Always know if you&apos;ll need an umbrella!</h2>
      </div>
    );
  }
}
