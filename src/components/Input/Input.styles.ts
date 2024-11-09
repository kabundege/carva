import {StyleSheet} from 'react-native';
import {Colors, Dimensions, globalStyles} from '../../styles';

const styles = StyleSheet.create({
  item: {
    position: 'relative',
  },
  labelView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Dimensions.SIZE_XS,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.INPUT_WIDTH,
    height: Dimensions.INPUT_HEIGHT,
    borderColor: Colors.BRIGHT_GRAY,
    backgroundColor: Colors.GRAY_BG,
    borderWidth: Dimensions.INPUT_BORDER_SIZE,
    borderRadius: Dimensions.INPUT_BORDER_RADIUS,
    overflow: 'hidden',
  },
  input: {
    paddingHorizontal: Dimensions.INPUT_HORIZONTAL_SPACING,
    paddingVertical: Dimensions.INPUT_VERTICAL_SPACING,
    textDecorationColor: 'transparent',
    fontSize: Dimensions.FONT_SIZE_M,
    textShadowColor: 'transparent',
    color: Colors.DEFAULT,
    zIndex: 1,
    flex: 1,
  },
  rightIcon: {
    alignSelf: 'center',
    ...globalStyles.centered,
    height: Dimensions.INPUT_HEIGHT,
    width: Dimensions.INPUT_HEIGHT * 0.9,
    backgroundColor: Colors.PRIMARY_LIGHT,
    marginLeft: Dimensions.INPUT_HORIZONTAL_SPACING,
    transform: [{translateX: Dimensions.INPUT_HORIZONTAL_SPACING}],
  },
  error: {
    alignItems: 'flex-end',
    width: '100%',
    marginTop: 4,
    zIndex: 0,
  },
});

export default styles;
