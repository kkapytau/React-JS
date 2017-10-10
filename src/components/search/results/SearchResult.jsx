import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './styles.scss';

function SearchResult(props) {
  // почему в сторе, если его импортить нет мувисов?
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
