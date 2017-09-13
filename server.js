const path = require('path');
const express = require('express');

const PORT = 3000;
const PUBLIC_PATH = path.resolve(__dirname, './src/css'); // just for this example we didn't use any static stuff, but it will be need for us in future
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(PUBLIC_PATH));
} else {
  const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
  const webpackConfig = require('./webpack.config');
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, { // eslint-disable-line import/no-extraneous-dependencies
    hot: true
  }));
  app.use(require('webpack-hot-middleware')(compiler)); // eslint-disable-line import/no-extraneous-dependencies
}

app.all('*', (req, res) => {
  /*
  res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
  */
  res.send('<div class="ssr">Hello World from server!</div>');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`); // eslint-disable-line no-console
});
