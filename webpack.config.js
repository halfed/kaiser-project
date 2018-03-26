const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: false
});

const path = require("path");

module.exports = {
  entry: {
      app: __dirname + '/src/js/main.js'
    },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: ["/node_modules/", "build/js/", "/src/js/comments.js", "Gruntfile.js", "webpack.config.old.js"],
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: "js/main.min.js",
    path: __dirname + '/build/'
  },
  plugins: [HTMLWebpackPluginConfig, new UglifyJSPlugin(
                                         sourceMap: true)]
};
