var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    devtool: "eval-source-map",
    entry:  __dirname + "/source/client/app.js",
    output: {
      path: __dirname + "/build",
      filename: "lp-analytics-client.js",
      publicPath: "/"
    },
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: "json"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style", "css!sass?" + getSassPaths())
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("lp-analytics.css"),
      // new webpack.optimize.OccurenceOrderPlugin(),
      // new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({
        template: __dirname + '/source/client/html/index.tpl.html',
        baseHref: "http://localohost:3000"
      })
    ]
  }
]

function getSassPaths(){
  return require("node-neat").includePaths.map(function(sassPath) {
    return "includePaths[]=" + sassPath;
  }).join("&");
}
