require('babel-core/register');

['.css', '.less', '.sass', '.ttf', '.woff', '.woff2', '.scss'].forEach((ext) => require.extensions[ext] = () => {});
require('babel-polyfill');
require('server.jsx');
