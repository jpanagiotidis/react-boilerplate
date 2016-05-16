var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    devtool: "eval-source-map",
    entry:  __dirname + "/source/client/app.js",
    output: {
      path: __dirname + "/build",
      filename: "client.js",
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
        // {
        //   test: /\.scss$/,
        //   loader: ExtractTextPlugin.extract("style", "css!sass?" + getSassPaths())
        // },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]")
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader")
        }
      ]
    },
    sassLoader: {
      includePaths: getSassPaths()
    },
    plugins: [
      new ExtractTextPlugin("style.css"),
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
  var bourbon_paths = require('node-bourbon').includePaths
  var neat_paths = require('node-neat').includePaths
  var scssIncludePaths = bourbon_paths.concat(neat_paths).concat([path.join(__dirname,'source', 'client','sass')]);
  // console.log(scssIncludePaths);
  return scssIncludePaths;
  // return require("node-neat").includePaths.map(function(sassPath) {
  //   return "includePaths[]=" + sassPath;
  // }).join("&");
}
