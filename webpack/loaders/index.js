const SVGLoader = {
  test: /\.svg/,
  use: ["svg-loader"]
};

const babelLoader = {
  test: /\.js/,
  exclude: /node_modules/,
  use: [
    {
      loader: "babel-loader",
      options: {
        babelrcRoots: [".", "../", "../.."],
        presets: ["@babel/preset-reset"],
        plugins: [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-proposal-export-default-from",
          "syntax-dynamic-import"
        ]
      }
    }
  ]
};

const CSSLoader = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"]
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: "pre",
  exclude: /node_modules/,
  use: {
    loader: "eslint-loader",
    options: {
      configFile: `${__dirname}/../../.eslintrc`
    }
  }
};

const htmlLoader = {
  test: /\.html$/,
  use: ["html-loader"]
};

module.exports = {
  babelLoader,
  CSSLoader,
  ESLintLoader,
  htmlLoader,
  SVGLoader
};
