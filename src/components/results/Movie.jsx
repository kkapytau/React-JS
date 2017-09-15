import React from 'react';


export default function Movie(props) {
  return (
    <figure data-toggle="modal" data-target="#myModal">
      <img src={props.movie.poster} alt={props.movie.title} />
      <figcaption>
        <span className="title">{props.movie.title}</span>
        <span className="date">{props.movie.date}</span>
        <span className="category">{props.movie.category}</span>
      </figcaption>
    </figure>
  );
}

Movie.defaultProps = {
  movie: {
    poster: 'Unknown',
    title: 'Unknown',
    date: 'Unknown',
    category: 'Unknown'
  }
};

Movie.propTypes = {
  movie: React.PropTypes.shape({
    poster: React.PropTypes.string,
    title: React.PropTypes.string,
    date: React.PropTypes.string,
    category: React.PropTypes.string
  })
};
