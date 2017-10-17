import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'url-search-params-polyfill';
import * as movieActions from '../MovieAPI';
import './movieInfo.scss';
import store from '../../../store/Store';
import { POSTER_PATH } from '../../../constants/Constants';

function MovieInfo(props) {
  function goBack() {
    props.history.goBack();
  }
  const params = new URLSearchParams(props.location.search);
  const { getMovie } = props.movieActions;
  getMovie(parseInt(params.get('id'), 10));
  // почему в пропсах нет мувисов, хотя они есть в сторе?
  const movie = store.getState().moviesState.movie;
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

function mapDispatchToProps(dispatch) {
  return {
    movieActions: bindActionCreators(movieActions, dispatch)
  };
}

MovieInfo.defaultProps = {
  location: {
    search: ''
  },
  history: {
    goBack: null
  },
  movieActions: {
    movieActions: null
  }
};

MovieInfo.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }),
  history: PropTypes.shape({
    goBack: PropTypes.func
  }),
  movieActions: PropTypes.shape({
    movieActions: PropTypes.func
  })
};

export default connect(null, mapDispatchToProps)(MovieInfo);
