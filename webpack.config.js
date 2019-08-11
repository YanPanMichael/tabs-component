var path = require('path');
var webpack = require('webpack');
var sassLoader = 'style!css!sass?sourceMap=true&sourceMapContents=true';
const htmlWebpackPlugin = require('html-webpack-plugin'); //这个插件的两个作用：

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './js/tabs.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'js'),
        ],
        use: ['react-hot', 'babel'],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/ //babel转化高级js语法
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'css'),
        ],
        use: sassLoader
      }
    ],
  },
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './index.html'), //指定模板文件
      filename: 'index.html' //指定生成页面的名称 最好与要替换的模板文件重名
    })
  ],
}
