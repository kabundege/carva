import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../styles';

const styles = StyleSheet.create({
  default: {
    ...Fonts.regular,
    color: Colors.DEFAULT,
  },
  center: { textAlign: 'center' },
  uppercase: { textTransform: 'uppercase' },
  capitalize: { textTransform: 'capitalize' },
  underline: { textDecorationLine: 'underline' },
});

export default styles;
