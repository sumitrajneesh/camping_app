import {Dimensions} from 'react-native';
const width = Dimensions.get('width').width;
const height = Dimensions.get('height').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
