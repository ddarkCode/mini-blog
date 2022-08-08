const { join, resolve } = require('path');
const { merge } = require('webpack-merge');

const webpackBase = require('./webpack.base');

const config = {
  entry: join(__dirname, 'src', 'client', 'client.js'),
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
  },
};

module.exports = module.exports = merge(webpackBase, config);
