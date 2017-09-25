import React from 'react';
import PropTypes from 'prop-types';
import 'url-search-params-polyfill';
import MovieAPI from './MovieAPI';


export default function MovieInfo(props) {
  const params = new URLSearchParams(props.location.search);
  const movie = MovieAPI.getMovie(parseInt(params.get('id'), 10))[0];
  return (
    <div className="info">
      <div className="return-button">
        <button className="btn btn-default" type="submit">Search</button>
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
  movie: {
    poster: 'Unknown',
    title: 'Unknown',
    date: 'Unknown',
    category: 'Unknown',
    rating: 'Unknown',
    runtime: 'Unknown',
    summary: 'Unknown',
    director: 'Unknown',
    show_cast: 'Unknown',
    unit: -1
  }
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.string,
    runtime: PropTypes.string,
    summary: PropTypes.string,
    director: PropTypes.string,
    show_cast: PropTypes.string,
    unit: PropTypes.number
  })
};
