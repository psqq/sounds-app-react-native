module.exports = {
  // resolver: {
  //   assetExts: ['ogg'],
  // },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
