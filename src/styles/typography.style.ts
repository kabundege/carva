import Dimensions from './dimensions.style';
import {StyleSheet} from 'react-native';
import Colors from './colors.style';
import Fonts from './fonts.style';

export default StyleSheet.create({
  title: {
    color: Colors.PRIMARY,
    fontSize: Dimensions.FONT_SIZE_XL,
    ...Fonts.medium,
  },
  subtitle: {
    color: Colors.DEFAULT,
    fontSize: Dimensions.FONT_SIZE_L,
    ...Fonts.medium,
  },
  body: {
    color: Colors.DEFAULT,
    fontSize: Dimensions.FONT_SIZE_M,
  },
  caption: {
    color: Colors.DEFAULT,
    fontSize: Dimensions.FONT_SIZE_SM,
    ...Fonts.light,
  },
  captionLarge: {
    color: Colors.DEFAULT,
    fontSize: Dimensions.FONT_SIZE_M,
    ...Fonts.light,
  },
  label: {
    ...Fonts.medium,
    color: Colors.DEFAULT,
    fontSize: Dimensions.FONT_SIZE_SM,
  },
  button: {
    color: Colors.DEFAULT,
    fontSize: Dimensions.FONT_SIZE_SM,
    textTransform: 'uppercase',
    ...Fonts.medium,
  },
});
