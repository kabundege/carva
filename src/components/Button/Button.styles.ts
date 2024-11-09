import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Fonts} from '../../styles';

const styles = StyleSheet.create({
  primaryText: {
    color: Colors.WHITE,
    ...Fonts.black,
  },
  textDark: {
    color: Colors.WHITE,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.PRIMARY,
    width: Dimensions.BUTTON_WIDTH,
    backgroundColor: Colors.PRIMARY,
    height: Dimensions.BUTTON_HEIGHT,
    borderWidth: Dimensions.BUTTON_BORDER_SIZE,
    borderRadius: Dimensions.BUTTON_BORDER_RADIUS,
    paddingHorizontal: Dimensions.BUTTON_HORIZONTAL_SPACING,
  },
  text: {
    backgroundColor: 'transparent',
    ...Fonts.semibold,
  },
  primary: {
    backgroundColor: Colors.PRIMARY,
    borderColor: Colors.PRIMARY,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderColor: Colors.PRIMARY,
  },
  danger: {
    backgroundColor: Colors.DANGER,
    borderColor: Colors.DANGER,
  },
  dark: {
    backgroundColor: Colors.DARKBLUE,
    borderColor: Colors.DARKBLUE,
  },
  transparent: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  success: {
    backgroundColor: Colors.GREEN,
    borderColor: Colors.GREEN,
  },
  inverse: {
    backgroundColor: Colors.PRIMARY_VARIANT,
    borderColor: Colors.PRIMARY_VARIANT,
  },
  textSecondary: {
    color: Colors.DARK_INDIGO,
    ...Fonts.black,
  },
  textDanger: {
    color: Colors.WHITE,
  },
  textSuccess: {
    color: Colors.WHITE,
  },
  textInverse: {
    color: Colors.PRIMARY,
  },
});

export default styles;
