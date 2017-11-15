import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../search/bar/SearchBar';
import Movies from '../movies/list/Movies';

export default function App(props) {
  return (
    <div>
      <SearchBar />
      <Movies {...props} />
    </div>
  );
}

App.defaultProps = {
  children: null
};

App.propTypes = {
  children: PropTypes.node
};
