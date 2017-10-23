import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Movie from '../movie/Movie';
import { getMovies, getStaticMoviesData, getSearchData } from '../MovieAPI';
import './movies.scss';

class Movies extends React.Component {
  componentDidMount() {
    if (!getStaticMoviesData()) {
      this.props.getMovies(getSearchData(this.props.match.params, this.props.search));
    }
  }

  render() {
    const searchObj = getSearchData(this.props.match.params, this.props.search);
    const tmpResult = (this.props.movies.length) ? this.props.movies.map(data => (
      <Movie key={data.id} movie={data} search={searchObj} />)) : <div className="no-films">No Films Found</div>;
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
    getMovies: bindActionCreators(getMovies, dispatch)
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
  getMovies: null,
  search: '',
  filter: ''
};

Movies.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string,
      filter: PropTypes.string
    })
  }),
  getMovies: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.shape({})),
  search: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
