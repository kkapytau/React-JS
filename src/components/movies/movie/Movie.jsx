import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { POSTER_PATH } from '../../../constants/Constants';
import * as movieActions from '../MovieAPI';
import './styles.scss';

function handler(props) {
  const { getMovie } = props.movieActions;
  getMovie(props.movie.id);
}

function Movie(props) {
  return (
    <Link onClick={handler(props)} to={`/film/${props.movie.original_title}?id=${props.movie.id}`}>
      <figure>
        <img src={`${POSTER_PATH}${props.movie.poster_path}`} alt={props.movie.original_title} />
        <figcaption>
          <span className="title">{props.movie.original_title}</span>
          <span className="date">{props.movie.release_date}</span>
        </figcaption>
      </figure>
    </Link>
  );
}

Movie.defaultProps = {
  movie: {
    poster_path: 'Unknown',
    original_title: 'Unknown',
    release_date: 'Unknown',
    id: -1
  }
};

Movie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    id: PropTypes.number
  })
};

function mapDispatchToProps(dispatch) {
  return {
    movieActions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Movie);
