const plugin = require("../plugins/plugin");

module.exports = {
  devtool: "source-map",
  mode: "production",
  plugins: [plugin.CompressionPlugin]
};
