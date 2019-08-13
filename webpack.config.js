const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "./src/main.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
      inject: true,
      filename: "index.html"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "cheap-module-eval-source-map", // any "source-map"-like devtool is possible
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
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
      { test: /\.(png|gif|bmp|jpg)$/, use: "url-loader?limit=5000" },
    ]
  }
};
