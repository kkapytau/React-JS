import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { POSTER_PATH } from '../../../constants/Constants';
import { getStaticMovie } from '../MovieAPI';
import './styles.scss';

function handler(props) {
  props.getStaticMovie(props.movie.id);
}

export function Movie(props) {
  let urlData = props.filtersState;
  if (!urlData.searchText) {
    urlData = props.search;
  }
  return (
    <Link
      onClick={() => { handler(props); }}
      to={`/film/${props.movie.original_title}?id=${props.movie.id}&searchType=${urlData.searchType}&query=${urlData.query}`}
    >
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
  },
  filtersState: {
    filterName: '',
    searchText: ''
  },
  search: {
    query: '',
    filter: ''
  }
};

Movie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    id: PropTypes.number
  }),
  filtersState: PropTypes.shape({
    filterName: PropTypes.string,
    searchText: PropTypes.string
  }),
  search: PropTypes.shape({
    query: PropTypes.string,
    filter: PropTypes.string
  })
};

const mapStateToProps = function (store) {
  return {
    filtersState: store.filtersState
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getStaticMovie: bindActionCreators(getStaticMovie, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
