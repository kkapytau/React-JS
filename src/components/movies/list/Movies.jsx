import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Movie from '../movie/Movie';
import * as movieActions from '../MovieAPI';
import './movies.scss';

class Movies extends React.Component {
  componentDidMount() {
    const { getMovies } = this.props.movieActions;
    getMovies({ [this.props.filter]: (this.props.match.params.query) ? this.props.match.params.query : '' });
  }

  render() {
    const tmpResult = (this.props.movies.length) ? this.props.movies.map(data => (
      <Movie key={data.unit} movie={data} />)) : <div className="no-films">No Films Found</div>;
    return (
      <section className="movies">
        {tmpResult}
      </section>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    movies: store.moviesState.movies,
    filter: store.filtersState.filterName
  };
};

function mapDispatchToProps(dispatch) {
  return {
    movieActions: bindActionCreators(movieActions, dispatch)
  };
}

Movies.defaultProps = {
  movies: [],
  match: {
    params: {
      query: ''
    }
  },
  movieActions: {
    getMovies: null
  },
  filter: ''
};

Movies.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string
    })
  }),
  movieActions: PropTypes.shape({
    getMovies: PropTypes.func
  }),
  filter: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.shape({}))
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
