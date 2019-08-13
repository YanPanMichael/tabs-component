const path = require('path');
const webpack = require('webpack'); // 第二步

const htmlWebpackPlugin = require('html-webpack-plugin'); //这个插件的两个作用：
//1 自动在内存中根据配置的template指定页面生成一个内存页面
//2 自动把打包好的bundle.js追加到页面中

module.exports = {
  entry: path.join(__dirname, './js/app.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // webpack.HotModuleReplacementPlugin本身是类，那么它就有构造函数, new一个实例
    new htmlWebpackPlugin({
      template: path.join(__dirname, './index.html'), //指定模板文件
      filename: 'index.html' //指定生成页面的名称 最好与要替换的模板文件重名
    }),
    new webpack.NamedModulesPlugin(),
  ],
  devtool: "cheap-module-eval-source-map", // any "source-map"-like devtool is possible
  module: { //这个节点， 配置说有第三方模块加载器
    rules: [ //所有第三方模块的匹配规则
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/ //babel转化高级js语法
      },
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: 'url-loader?limit=100000&name=[hash:8]-[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: 'url-loader'
      },
    ]
  }
}
