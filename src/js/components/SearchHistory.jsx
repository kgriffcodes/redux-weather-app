import React from 'react';
import SearchHistElement from './SearchHistElement';

export default class SearchHistory extends React.Component {
  render() {
    return (
      <div className='subcontainer col-5 p-0'>
        <div className='subheader-container subheader-bg p-2'>
          <h3 className='subheader subheader-bg'>Search History</h3>
        </div>
        <div className='p-2'>
          <SearchHistElement />
          <SearchHistElement />
          <SearchHistElement />
          <SearchHistElement />
          <SearchHistElement />
        </div>
      </div>
    );
  }
}
