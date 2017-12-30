const path = require("path");

module.exports = {
  entry: "./App.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        query: {
          presets: ["react"],
          plugins: ["transform-object-rest-spread"]
        }
      }
    ]
  }
};
