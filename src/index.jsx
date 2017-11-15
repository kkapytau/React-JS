import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/Store';
import routes from './routes/routes';

let preloadedState = {};
/* eslint-disable no-underscore-dangle */
// Grab the state from a global variable injected into the server-generated HTML
if (typeof window !== 'undefined') {
  preloadedState = window.__PRELOADED_STATE__;
  // Allow the passed state to be garbage-collected
  delete window.__PRELOADED_STATE__;
}
/* eslint-enable */

const store = configureStore(preloadedState);

function render() {
  return ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
}

 render();

if (module.hot) {
  module.hot.accept('./index', render);
}
