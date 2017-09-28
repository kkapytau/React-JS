import React from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import SearchBar from '../search/SearchBar';
import Movies from '../movies/Movies';

export default function App(props) {
  return (
    <div>
      <SearchBar result="7 movies found" />
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/search" component={Movies} />
        <Route path="/search/:query" component={Movies} />

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
