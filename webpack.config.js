const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ["babel-loader", "eslint-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new CleanWebpackPlugin()
  ]
};
