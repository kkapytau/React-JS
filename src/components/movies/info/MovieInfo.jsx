import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'url-search-params-polyfill';
import { POSTER_PATH } from '../../../constants/Constants';
import './movieInfo.scss';

function MovieInfo(props) {
  function goBack() {
    props.history.goBack();
  }
  const movie = props.movie;
  return (
    <div className="info">
      <div className="return-button">
        <button className="btn btn-default" onClick={goBack} type="button">Search</button>
      </div>
      <summary>
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.original_title} />
        <div className="description">
          <h2>{movie.original_title}</h2> <span className="circle">{movie.vote_average}</span>
          <p className="date-time"><span>{movie.release_date}</span></p>
          <p className="summary">{movie.overview}</p>
        </div>
      </summary>
    </div>
  );
}

const mapStateToProps = function (store) {
  return {
    movie: store.moviesState.movie
  };
};

MovieInfo.defaultProps = {
  history: {
    goBack: null
  },
  movie: null
};

MovieInfo.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func
  }),
  movie: PropTypes.shape({
    movieActions: PropTypes.func
  })
};

export default connect(mapStateToProps)(MovieInfo);
