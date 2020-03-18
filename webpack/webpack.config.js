const webpackMerge = require("webpackmerge");
const commonConfig = require("./buildutils/webpack.common.js");
const loadPresets = require("./presets/loadPresets");

module.exports = env => {
  const envConfig = require(`./buildutils/webpack.${env.env}.js`);
  return webpackMerge(commonConfig, envConfig, loadPresets(env));
};
