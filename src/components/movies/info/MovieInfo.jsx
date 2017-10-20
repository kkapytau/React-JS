import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'url-search-params-polyfill';
import { POSTER_PATH } from '../../../constants/Constants';
import { getMovie } from '../MovieAPI';
import './movieInfo.scss';

class MovieInfo extends React.Component {
  componentWillMount() {
    const params = new URLSearchParams(this.props.location.search);
    this.props.getMovie(params.get('id'));
  }
  goBack() {
    this.props.history.goBack();
  }
  render() {
    return (
      (this.props.movie) ?
        <div className="info">
          <div className="return-button">
            <button className="btn btn-default" onClick={() => this.goBack()} type="button">Search</button>
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
  history: {
    goBack: null
  },
  location: {
    search: ''
  },
  getMovie: null,
  movie: {
    poster_path: 'Unknown',
    original_title: 'Unknown',
    release_date: 'Unknown',
    id: -1,
    overview: 'Unknown',
    vote_average: 'Unknown'
  }
};

MovieInfo.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func
  }),
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }),
  getMovie: PropTypes.func,
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
