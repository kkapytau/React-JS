import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as movieActions from '../../movies/MovieAPI';
import './styles.scss';
import store from '../../../store/Store';
import { getFilterData, getSearchText } from '../../../actions/FilterActions';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      toggle: true
    };
    console.log(this.props)
  }

  filterHandle(toggle) {
    if (this.state.toggle !== toggle) {
      this.setState({ toggle });
      store.dispatch(getFilterData((toggle) ? 'movie' : 'person'));
    }
  }

  submitHandler(event) {
    event.preventDefault();
    const { getMovies } = this.props.movieActions;
    getMovies({ searchType: store.getState().filtersState.searchType, query: this.state.value });
    store.dispatch(getSearchText(this.state.value));
    this.props.history.push(`/search/${this.state.value}&${(this.state.toggle) ? 'movie' : 'person'}`);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={e => this.submitHandler(e)}>
        <fieldset className="search-section">
          <label htmlFor="movie-search">Find your movie</label>
          <input id="movie-search" type="text" onChange={e => this.handleChange(e)} />
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

function mapDispatchToProps(dispatch) {
  return {
    movieActions: bindActionCreators(movieActions, dispatch)
  };
}

SearchForm.defaultProps = {
  movieActions: {
    getMovies: null
  },
  history: {
    push: null
  }
};

SearchForm.propTypes = {
  movieActions: PropTypes.shape({
    getMovies: PropTypes.func
  }),
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default withRouter(connect(null, mapDispatchToProps)(SearchForm));
