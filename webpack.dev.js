const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8000,
    open: true,
    hot: true,
  },
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
  },
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCssAssetsPlugin({})],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: "Fylo Landing Page",
      filename: "index.html",
      template: path.resolve(__dirname, "./src/view/index.html"),
      favicon: "./src/images/favicon-32x32.png",
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: "/.js$/",
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
};
