import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../styles';

const styles = StyleSheet.create({
  transparent: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
  },
  inverse: {
    backgroundColor: Colors.PRIMARY_VARIANT,
    borderColor: Colors.PRIMARY_VARIANT,
  },
  dark: {
    backgroundColor: Colors.DARKBLUE,
    padding: Dimensions.SIZE_M,
    borderRadius: Dimensions.SIZE_XS,
  },
  secondary: {
    borderWidth: 1,
    padding: Dimensions.SIZE_M,
    backgroundColor: Colors.GRAY_BG,
    borderColor: Colors.BRIGHT_GRAY,
    borderRadius: Dimensions.SIZE_XS,
  },
  primary: {
    backgroundColor: Colors.PRIMARY,
    padding: Dimensions.SIZE_M,
    borderRadius: Dimensions.SIZE_XS,
  },
});

export default styles;
