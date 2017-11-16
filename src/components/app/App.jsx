import React from 'react';
import SearchBar from '../search/bar/SearchBar';
import Movies from '../movies/list/Movies';
import { getMovies, getSearchData } from '../movies/MovieAPI';

export default class App extends React.Component {
  static fetchData(dispatch, match, location) {
    const search = location.substr(location.indexOf('?'));
    return getMovies(getSearchData(match.params, search))(dispatch);
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Movies {...this.props} />
      </div>
    );
  }
}
