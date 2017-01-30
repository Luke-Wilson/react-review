var express = require('express');

//require webpack, middleware and config
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var app = express();

//create compiler using webpackConfig
var compiler = webpack(webpackConfig);

//set path for static files
app.use(express.static(__dirname + '/www'));

//use webpack middleware with compiler
app.use(webpackDevMiddleware(compiler, {
  hot: true, //hot reloading?
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

var port = 3003;

app.listen(port, () => {
  console.log('server listening on', port);
});
