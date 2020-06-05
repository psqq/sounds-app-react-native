const defaultAssetExts = require('metro-config/src/defaults/defaults')
  .assetExts;

module.exports = {
  resolver: {
    assetExts: [...defaultAssetExts, 'ogg'],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
