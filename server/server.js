var express = require('express');

//webpack middleware
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var app = express();

//add compiler
var compiler = webpack(webpackConfig);




var port = 3003;

app.listen(port, () => {
  console.log('server listening on', port);
});
