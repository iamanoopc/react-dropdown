var common = require('./webpack.config.common');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './app/entrypoint',
  output: {
    filename: 'bundle.[hash].js',
    path: 'build',
    publicPath: './build/'
  },
  module: {
    loaders: [
      common.jsLoader,
      common.cssLoader,
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new HtmlWebpackPlugin({
      template: './deploy/index.html',
      inject: true,
    }),
  ],
  postcss: common.postcss
};
