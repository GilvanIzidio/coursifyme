module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:[
    // always has to be last on the list
    'react-native-reanimated/plugin',
  ]
};
