const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "index.css"
    })
  ]
};
