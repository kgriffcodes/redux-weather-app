import React from 'react';
import propTypes from 'prop-types';

export default class SearchHistElement extends React.Component {
  render() {
    return (
      <div className='search-hist-element p-2 d-flex flex-row justify-content-between'>
        <p>{this.props.deets.cityFullName}</p>
        <div>
          <p className='search-hist-date'>{this.props.deets.currentDate}</p>
          <p className='search-hist-time'>{this.props.deets.currentTime}</p>
        </div>
      </div>
    );
  }
}

SearchHistElement.propTypes = {
  deets: propTypes.objectOf(propTypes.string),
};
