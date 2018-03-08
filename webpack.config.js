var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

const path = require("path");

module.exports = {
  entry: {
      app: __dirname + '/src/js/main.min.js'
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
  plugins: [HTMLWebpackPluginConfig]
};
