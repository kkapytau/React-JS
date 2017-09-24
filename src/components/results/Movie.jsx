import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Movie(props) {
  const popupId = `#${props.movie.unit}`;
  return (
    <Link to="/film/Some Name">
      <figure data-toggle="modal" data-target={popupId}>
        <img src={props.movie.poster} alt={props.movie.title} />
        <figcaption>
          <span className="title">{props.movie.title}</span>
          <span className="date">{props.movie.date}</span>
          <span className="category">{props.movie.category}</span>
        </figcaption>
      </figure>
    </Link>
  );
}

Movie.defaultProps = {
  movie: {
    poster: 'Unknown',
    title: 'Unknown',
    date: 'Unknown',
    category: 'Unknown',
    unit: -1
  }
};

Movie.propTypes = {
  movie: PropTypes.shape({
    poster: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    category: PropTypes.string,
    unit: PropTypes.number
  })
};
