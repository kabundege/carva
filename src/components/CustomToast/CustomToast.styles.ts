import {StyleSheet} from 'react-native';
import {Colors, Dimensions, Fonts} from '../../styles';
import {isIos} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: Dimensions.WINDOW_WIDTH - Dimensions.SPACING * 2,
    marginTop: isIos ? Dimensions.SIZE_L : 0,
    shadowColor: Colors.DARK_SILVER,
    borderLeftColor: Colors.PRIMARY,
    backgroundColor: Colors.WHITE,
    paddingVertical: 20,
    borderLeftWidth: 5,
    paddingLeft: 22,
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 32,
    elevation: 20,
  },
  content: {
    paddingHorizontal: 16,
  },
  title: {
    ...Fonts.medium,
    marginBottom: 8,
  },
  message: {
    // marginVertical: 4,
  },
  icon: {
    marginTop: -4,
  },
});

export default styles;
