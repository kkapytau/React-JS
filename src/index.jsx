import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/app/App';
import NotFound from './components/NotFound';
import Movies from './components/results/Movies';
import Movie from './components/results/Movie';
import MovieNotFound from './components/search/MovieNotFound';


function render() {
  return ReactDom.render(
    <AppContainer>
      <Router>
        <App />
      </Router>
    </AppContainer>,
    document.getElementById('app')
  );
}

render();

if (module.hot) {
  module.hot.accept('./index', render);
}
