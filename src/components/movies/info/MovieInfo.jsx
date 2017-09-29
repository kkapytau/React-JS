import React from 'react';
import PropTypes from 'prop-types';
import 'url-search-params-polyfill';
import MovieAPI from '../MovieAPI';
import './movieInfo.scss';

export default function MovieInfo(props) {
  function goBack() {
    props.history.goBack();
  }
  const params = new URLSearchParams(props.location.search);
  const movie = MovieAPI.getMovie(parseInt(params.get('id'), 10))[0];
  return (
    <div className="info">
      <div className="return-button">
        <button className="btn btn-default" onClick={goBack} type="button">Search</button>
      </div>
      <summary>
        <img src={movie.poster} alt={movie.title} />
        <div className="description">
          <h2>{movie.title}</h2> <span className="circle">{movie.rating}</span>
          <p> {movie.category}</p>
          <p className="date-time"><span>{movie.date}</span> <span>{movie.runtime}</span></p>
          <p className="summary">{movie.summary}</p>
          <p className="director-cast">Director: {movie.director}</p>
          <p className="director-cast">Cast: {movie.show_cast}</p>
        </div>
      </summary>
    </div>
  );
}

MovieInfo.defaultProps = {
  location: {
    search: ''
  },
  history: {
    goBack: null
  }
};

MovieInfo.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }),
  history: PropTypes.shape({
    goBack: PropTypes.func
  })
};
