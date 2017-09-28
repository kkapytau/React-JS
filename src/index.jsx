import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDom from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/App';
import NotFound from './components/NotFound';
import MovieInfo from './components/movies/MovieInfo';

function render() {
  return ReactDom.render(
    <AppContainer>
      <Router>
        <Switch>
          <Route path="/film/:name" component={MovieInfo} />
          <Route path="/" component={App} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </AppContainer>,
    document.getElementById('app')
  );
}

render();

if (module.hot) {
  module.hot.accept('./index', render);
}
