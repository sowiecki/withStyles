const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseConfig = require("./webpack.config");
const baseContext = path.join(__dirname, "../src");
const demoContext = path.join(__dirname, "../demo");

module.exports = {
  ...baseConfig,
  context: demoContext,
  entry: demoContext,
  mode: "development",
  output: {
    path: path.join(__dirname, "./"),
    filename: "bundle.js",
    publicPath: "./",
    libraryTarget: "umd"
  },
  resolve: {
    modules: baseConfig.resolve.modules.concat(demoContext)
  },
  module: {
    rules: [
      {
        ...baseConfig.module.rules[0],
        include: [demoContext, baseContext]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "../demo/index.html")
    })
  ]
};
