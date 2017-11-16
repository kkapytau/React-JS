import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import 'url-search-params-polyfill';
import { POSTER_PATH } from '../../../constants/Constants';
import { getMovie, getSearchData } from '../MovieAPI';
import Movies from '../list/Movies';
import './movieInfo.scss';

export class MovieInfo extends React.Component {
  static fetchData(dispatch, match, location) {
    const search = location.substr(location.indexOf('?'));
    const params = new URLSearchParams(search);
    return getMovie(params.get('id'))(dispatch);
  }

  componentDidMount() {
    if (!this.props.movie) {
      const params = new URLSearchParams(this.props.location.search);
      this.props.getMovie(params.get('id'));
    }
  }

  render() {
    const searchData = getSearchData(this.props.match.params, this.props.location.search);
    return (
      (this.props.movie) ?
        <div>
          <div className="info">
            <div className="return-button">
              <Link className="btn btn-default" to={`/search/${searchData.query}?searchType=${searchData.searchType}`}>Search</Link>
            </div>
            <summary>
              <img src={`${POSTER_PATH}${this.props.movie.poster_path}`} alt={this.props.movie.original_title} />
              <div className="description">
                <h2>{this.props.movie.original_title}</h2> <span className="circle">{this.props.movie.vote_average}</span>
                <p className="date-time"><span>{this.props.movie.release_date}</span></p>
                <p className="summary">{this.props.movie.overview}</p>
              </div>
            </summary>
          </div>
          <Movies {...this.props} />
        </div>
        : <div>No Data</div>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    movie: store.moviesState.movie
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getMovie: bindActionCreators(getMovie, dispatch)
  };
}

MovieInfo.defaultProps = {
  location: {
    search: ''
  },
  getMovie: null,
  movie: null,
  match: {
    params: {
      query: '',
      filter: ''
    }
  }
};

MovieInfo.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }),
  getMovie: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string,
      filter: PropTypes.string
    })
  }),
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    id: PropTypes.number,
    overview: PropTypes.string,
    vote_average: PropTypes.strin
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
