// config-overrides.js
const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.md$/,
    use: 'raw-loader',
  })
);

const path = require('path');

module.exports = function override(config, env) {
  
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "path": require.resolve("path-browserify"),
    "os": require.resolve("os-browserify/browser")
  };

  return config;
};