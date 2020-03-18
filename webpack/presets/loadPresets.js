const webpacKMerge = require("webpack-merge");

const applyPresets = (env = { presets: [] }) => {
  const presets = env.presets || [];
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(presetName =>
    require(`./webpack.${presetName}`)
  );

  return webpacKMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;
