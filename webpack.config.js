const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseContext = path.join(__dirname, "src");
const demoContext = path.join(__dirname, "demo");

module.exports = {
  mode: "development",
  context: baseContext,
  entry: baseContext,
  output: {
    path: path.join(__dirname, "./build"),
    filename: "bundle.js",
    publicPath: "/",
    libraryTarget: "umd"
  },
  resolve: {
    modules: [demoContext, baseContext, "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js(x|)?$/,
        use: {
          loader: "babel-loader"
        },
        include: [demoContext, baseContext],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "demo/index.html")
    })
  ]
};
