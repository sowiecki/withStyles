const path = require("path");

const webpack = require("webpack");

const baseConfig = require("./webpack.config");
const baseContext = path.join(__dirname, "../src");

module.exports = {
  ...baseConfig,
  mode: "production",
  context: baseContext,
  entry: baseContext,
  output: {
    libraryTarget: "commonjs2",
    library: "withStyles",
    path: path.join(__dirname, "../dist"),
    filename: "index.js"
  }
};
