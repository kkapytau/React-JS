import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/Store';
import routes from './routes/routes';

const PORT = 3000;
const app = express();

if (process.env.NODE_ENV === 'production') {
  /* doing something */
} else {
  const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
  const webpackConfig = require('../webpack.config');
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, { // eslint-disable-line import/no-extraneous-dependencies
    hot: true
  }));
  app.use(require('webpack-hot-middleware')(compiler)); // eslint-disable-line import/no-extraneous-dependencies
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <link href="/main.css" rel="stylesheet">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="/searchMovie.js"></script>
      </body>
    </html>
    `;
}

app.get('*', (req, res) => {
  // Create a new Redux store instance
  const store = configureStore();

  const branch = matchRoutes(routes, req.path);

  const promises = branch.map(({ route, match }) => {
    const { fetchData } = route.component;
    return fetchData instanceof Function ?
      fetchData(store.dispatch, match, req.url) :
      Promise.resolve(null);
  });

  return Promise.all(promises).then(() => {
    const context = {};
    const appWithRouter = (
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          { renderRoutes(routes) }
        </StaticRouter>
      </Provider>
    );

    const html = renderToString(appWithRouter);

    if (context.url) {
      res.redirect(context.url);
      return;
    }

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.status(200).send(renderFullPage(html, preloadedState));
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`); // eslint-disable-line no-console
});
