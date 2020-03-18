const plugin = require("../plugins/plugins");

module.exports = {
  devtool: "source-map",
  mode: "production",
  plugins: [plugin.CompressionPlugin]
};
