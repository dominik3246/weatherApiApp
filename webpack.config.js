const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  context: path.join(__dirname, "src"),
  entry: './js/index.js',
  output: {
    path: __dirname + "/src/",
    filename: "index.min.js"
  },
  module: {
    loaders: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}