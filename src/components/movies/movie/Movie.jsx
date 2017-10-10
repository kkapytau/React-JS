import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function Movie(props) {
  return (
    <Link to={`/film/${props.movie.show_title}?id=${props.movie.unit}`}>
      <figure>
        <img src={props.movie.poster} alt={props.movie.show_title} />
        <figcaption>
          <span className="title">{props.movie.show_title}</span>
          <span className="date">{props.movie.release_year}</span>
          <span className="category">{props.movie.category}</span>
        </figcaption>
      </figure>
    </Link>
  );
}

Movie.defaultProps = {
  movie: {
    poster: 'Unknown',
    show_title: 'Unknown',
    release_year: 'Unknown',
    category: 'Unknown',
    unit: -1
  }
};

Movie.propTypes = {
  movie: PropTypes.shape({
    poster: PropTypes.string,
    show_title: PropTypes.string,
    release_year: PropTypes.string,
    category: PropTypes.string,
    unit: PropTypes.number
  })
};
