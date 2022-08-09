const { join, resolve } = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');

const webpackBase = require('./webpack.base');

const config = {
  target: 'node',
  entry: join(__dirname, 'src', 'index.js'),

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'build'),
  },
  externals: [webpackNodeExternals()],
  devtool: false,
};

module.exports = merge(webpackBase, config);
