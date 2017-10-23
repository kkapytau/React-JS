import React from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import SearchBar from '../search/bar/SearchBar';
import Movies from '../movies/list/Movies';

export default function App(props) {
  return (
    <div>
      <SearchBar />
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/search" component={Movies} />
        <Route path="/search/:query&:searchType" component={Movies} />
      </Switch>
      {props.children}
    </div>
  );
}

App.defaultProps = {
  children: null
};

App.propTypes = {
  children: PropTypes.node
};
