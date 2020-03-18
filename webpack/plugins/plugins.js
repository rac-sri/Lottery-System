const miniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebPackPlugin = require("html-webpack-plugin");
const compressionPlugin = require("compression-webpack-plugin");
const styleLintPlugin = require("stylelint-webpack-plugin");
const {
  CleanWebpackPlugin: cleanWebpackPlugin
} = require("clean-webpack-plugin");

const path = require("path");

const HtmlWebPackPlugin = new htmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const MiniCssExtractPlugin = new miniCssExtractPlugin({
  filename: "[name].bundle.css",
  chunkFilename: "[id].css"
});

const StyleLintPlugin = new styleLintPlugin({
  configFile: path.resolve(__dirname, "stylelint.config.js"),
  context: path.resolve(__dirname, "../../*"),
  files: "**/*.css",
  failOnError: false,
  quiet: false
});

const CompressionPlugin = new compressionPlugin({
  filename: "[path].gz[query]",
  algorithm: "gzip",
  threshold: 10240,
  minRatio: 0.7
});

const CleanWebpackPlugin = new cleanWebpackPlugin();

module.exports = {
  MiniCssExtractPlugin,
  CompressionPlugin,
  StyleLintPlugin,
  HtmlWebPackPlugin,
  CleanWebpackPlugin
};
