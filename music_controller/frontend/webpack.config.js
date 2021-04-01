const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  }, // npm startの場合は、"production"を参照
  //npm run dev の場合は"developement"を参照
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
};
