import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Movie from '../movie/Movie';
import * as movieActions from '../MovieAPI';
import './movies.scss';

class Movies extends React.Component {
  componentDidMount() {
    const { getMovies } = this.props.movieActions;
    getMovies({ searchType: this.props.match.params.filter, query: (this.props.match.params.query) ? this.props.match.params.query : '' });
  }

  render() {
    const tmpResult = (this.props.movies.length) ? this.props.movies.map(data => (
      <Movie key={data.id} movie={data} />)) : <div className="no-films">No Films Found</div>;
    return (
      <section className="movies">
        {tmpResult}
      </section>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    movies: store.moviesState.movies
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
      query: '',
      filter: ''
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
      query: PropTypes.string,
      filter: PropTypes.string
    })
  }),
  movieActions: PropTypes.shape({
    getMovies: PropTypes.func
  }),
  filter: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.shape({}))
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
