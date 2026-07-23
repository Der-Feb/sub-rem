const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Ensure the web compiler bundles static assets cleanly
config.resolver.assetExts.push('png', 'jpg', 'jpeg', 'svg');

module.exports = withNativeWind(config, { input: './global.css' });