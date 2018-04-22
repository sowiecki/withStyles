const path = require("path");
const webpack = require("webpack");

const baseContext = path.join(__dirname, "../src");

module.exports = {
  resolve: {
    modules: [baseContext, "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js(x|)?$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }
    ]
  }
};
