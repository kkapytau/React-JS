import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.scss';

export function SearchResult(props) {
  return <span id="results">{props.movies.length} movies found</span>;
}

const mapStateToProps = function (store) {
  return {
    movies: store.moviesState.movies
  };
};

SearchResult.defaultProps = {
  movies: []
};

SearchResult.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({}))
};

export default connect(mapStateToProps)(SearchResult);
