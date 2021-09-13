import React from 'react';

export default class SearchHistElement extends React.Component {
  render() {
    return (
      <div className='search-hist-element p-2 d-flex flex-row justify-content-between'>
        <p>City Name</p>
        <div>
          <p className='search-hist-date'>Date</p>
          <p className='search-hist-time'>Time</p>
        </div>
      </div>
    );
  }
}
