module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          assets: './src/assets',
          db: './src/db',
          components: './src/components',
          screens: './src/screens',
          styles: './src/styles',
        },
      },
    ],
  ],
};
