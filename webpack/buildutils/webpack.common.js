const loaders = require("../loaders");
const plugins = require("../plugins");

module.exports = {
  entry: ["/src/index.js"],
  module: {
    rules: [
      loaders.SVGLoader,
      loaders.ESLintLoader,
      loaders.babelLoader,
      loaders.htmlLoader,
      loaders.CSSLoader
    ]
  },
  plugins: [
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
    plugins.HtmlWebPackPlugin,
    plugins.CleanWebpackPlugin
  ]
};
