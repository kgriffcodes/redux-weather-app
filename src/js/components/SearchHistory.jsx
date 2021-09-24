import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import SearchHistElement from './SearchHistElement';

class SearchHistory extends React.Component {
  render() {
    return (
      <div className='subcontainer col-5 p-0'>
        <div className='subheader-container subheader-bg p-2'>
          <h3 className='subheader subheader-bg'>Search History</h3>
        </div>
        <div className='p-2'>
          <SearchHistElement deets={ this.props.history.history[4] } />
          <SearchHistElement deets={ this.props.history.history[3] } />
          <SearchHistElement deets={ this.props.history.history[2] } />
          <SearchHistElement deets={ this.props.history.history[1] } />
          <SearchHistElement deets={ this.props.history.history[0] } />
        </div>
      </div>
    );
  }
}

SearchHistory.propTypes = {
  history: propTypes.objectOf(propTypes.arrayOf(propTypes.objectOf(propTypes.string)))
};

const mapStoreToProps = store => ({
  history: store.history
});

export default connect(mapStoreToProps)(SearchHistory);
