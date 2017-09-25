import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import MovieAPI from './MovieAPI';

export default function Movies(props) {
  const resultArray = MovieAPI.getMovies().map(data => (
    <Movie key={data.unit} movie={data} />));
  const tmpResult = (props.match.params.query) ? resultArray : <div className="no-films">No Films Found</div>;
  return (
    <section className="movies">
      {tmpResult}
    </section>);
}

Movies.defaultProps = {
  match: {
    params: {
      query: ''
    }
  }
};

Movies.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string
    })
  })
};
