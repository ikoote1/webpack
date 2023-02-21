const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
//
entry: { index: path.resolve(__dirname, "source", "index.js") },
output: {
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
};