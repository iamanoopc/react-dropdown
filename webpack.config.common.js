var autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  jsLoader: {
    test: /\.js$/,
    include: [
      path.join(__dirname, 'app')
    ],
    loaders: ['babel', 'eslint']
  },
  cssLoader: {
    test: /\.scss$/,
    include: [
      path.join(__dirname, 'app')
    ],
    loaders: [
      'style',
      'css',
      'postcss',
      'sass'
    ]
  },
  postcss: [autoprefixer]
};
