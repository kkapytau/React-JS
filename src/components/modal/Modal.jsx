import React from 'react';
import PropTypes from 'prop-types';

export default function Modal(props) {
  return (
    <div id={props.movie.unit} className="myModal modal fade" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-body">
            <div className="return-button">
              <button className="btn btn-default" type="submit" data-dismiss="modal">Search</button>
            </div>
            <summary>
              <img src={props.movie.poster} alt={props.movie.title} />
              <div className="description">
                <h2>{props.movie.title}</h2> <span className="circle">{props.movie.rating}</span>
                <p> {props.movie.category}</p>
                <p className="date-time"><span>{props.movie.date}</span> <span>{props.movie.runtime}</span></p>
                <p className="summary">{props.movie.summary}</p>
                <p className="director-cast">Director: {props.movie.director}</p>
                <p className="director-cast">Cast: {props.movie.show_cast}</p>
              </div>
            </summary>
          </div>
        </div>

      </div>
    </div>
  );
}

Modal.defaultProps = {
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

Modal.propTypes = {
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
