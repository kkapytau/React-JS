import React from 'react';
import PropTypes from 'prop-types';
import 'url-search-params-polyfill';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMovies } from '../../movies/MovieAPI';
import './styles.scss';

export class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(props.location.search);
    let toggle = true;
    switch (params.get('searchType')) {
      case 'movie' :
        toggle = true;
        break;
      case 'person' :
        toggle = false;
        break;
      default:
        break;
    }
    this.state = {
      value: this.props.query,
      toggle
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      value: newProps.query
    });
  }
  filterHandle(toggle) {
    if (this.state.toggle !== toggle) {
      this.setState({ toggle });
    }
  }

  submitHandler(event) {
    event.preventDefault();
    const searchType = (this.state.toggle) ? 'movie' : 'person';
    this.props.getMovies({ searchType, query: this.state.value });
    this.props.history.push(`/search/${this.state.value}?searchType=${searchType}`);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={e => this.submitHandler(e)}>
        <fieldset className="search-section">
          <label htmlFor="movie-search">Find your movie</label>
          <input id="movie-search" type="text" value={this.state.value} onChange={e => this.handleChange(e)} />
          <span id="arrow">⤶</span>
        </fieldset>
        <fieldset className="bottom-section">
          <div className="search-filters">
            <span>Search By</span>
            <button className={this.state.toggle ? 'btn btn-danger' : 'btn'} onClick={() => this.filterHandle(true)} type="button">Title</button>
            <button className={(!this.state.toggle) ? 'btn btn-danger' : 'btn'} onClick={() => this.filterHandle(false)} type="button">Director</button>
          </div>
          <div className="form-submit">
            <button type="submit" className="btn btn-danger">Search</button>
          </div>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    query: store.filtersState.query
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getMovies: bindActionCreators(getMovies, dispatch)
  };
}

SearchForm.defaultProps = {
  getMovies: null,
  location: {
    search: ''
  },
  history: {
    push: null
  },
  query: ''
};

SearchForm.propTypes = {
  getMovies: PropTypes.func,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }),
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  query: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm));
