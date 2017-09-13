const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  context: path.join(__dirname, 'src'),

  entry: {
    hellow: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8081',
      './index.jsx'
    ],
    styles: './css/main.less'
  },

  output: {
    path: path.join(__dirname, 'built'),
    filename: '[name].js'
  },

  /*
  eslint: {
    configFile: path.join(__dirname, 'eslint-config.json'),
  },
  */

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 8081
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          eslintPath: path.join(__dirname, 'eslint-config.json')
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: 'Test',
      hash: true,
      template: './index.html'
    }),
    new ExtractTextPlugin({
      filename: 'main.css',
      allChunks: true
    })
  ]
};
