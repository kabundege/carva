import Fonts from './fonts.style';
import Colors from './colors.style';
import {StyleSheet} from 'react-native';
import Dimensions from './dimensions.style';

const globalStyles = StyleSheet.create({
  // Layout
  screen: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  flexAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flexEvenly: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  flexEnd: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  flexStart: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  fullScreenWidth: {
    width: Dimensions.SCREEN_WIDTH,
  },

  // Flex values
  flex1: {flex: 1},
  flex9: {flex: 0.9},
  flex95: {flex: 0.95},
  flex8: {flex: 0.8},
  flex7: {flex: 0.7},
  flex6: {flex: 0.6},
  flex5: {flex: 0.5},
  flex4: {flex: 0.4},
  flex3: {flex: 0.3},
  flex2: {flex: 0.2},
  flex01: {flex: 0.1},

  // Text transformations
  uppercase: {
    textTransform: 'uppercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },

  // Opacity
  opacity_5: {
    opacity: 0.5,
  },
  opacity_8: {
    opacity: 0.8,
  },

  // Textarea
  textarea: {
    paddingHorizontal: Dimensions.INPUT_HORIZONTAL_SPACING,
    paddingVertical: Dimensions.INPUT_VERTICAL_SPACING,
    textDecorationColor: 'transparent',
    fontSize: Dimensions.FONT_SIZE_L,
    textShadowColor: 'transparent',
    color: Colors.DEFAULT,
    ...Fonts.light,
    zIndex: 1,
    flex: 1,
  },

  // Buttons
  btnText: {
    fontSize: Dimensions.FONT_SIZE_L,
    color: Colors.DEFAULT,
  },

  // Modals
  modal: {
    overflow: 'hidden',
    borderRadius: Dimensions.SIZE_XS,
    backgroundColor: Colors.BACKGROUND,
    marginHorizontal: Dimensions.SPACING / 2,
  },

  // Dividers
  horizontalDivider: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.LIGHTBLUE,
    marginVertical: Dimensions.SPACING / 2,
  },
  verticalDivider: {
    width: 1,
    height: '100%',
    backgroundColor: Colors.LIGHT_SILVER,
    marginHorizontal: Dimensions.SIZE_XS / 2,
  },

  // Shadows
  shadow: {
    shadowOpacity: 0.5,
    shadowColor: Colors.DARKBLUE,
    shadowRadius: Dimensions.SIZE_XS,
    elevation: Dimensions.SIZE_XS / 2,
    shadowOffset: {width: 0, height: 0},
  },

  // Error message
  error: {
    ...Fonts.regular,
    textAlign: 'center',
    color: Colors.DANGER,
    marginBottom: Dimensions.SIZE_L,
  },

  // Spacing
  // Margins
  margin_XS: {margin: Dimensions.SIZE_XS},
  margin_SM: {margin: Dimensions.SIZE_SM},
  margin_M: {margin: Dimensions.SIZE_M},
  margin_L: {margin: Dimensions.SIZE_L},
  margin_XL: {margin: Dimensions.SIZE_XL},

  marginTop_XS: {marginTop: Dimensions.SIZE_XS},
  marginTop_SM: {marginTop: Dimensions.SIZE_SM},
  marginTop_M: {marginTop: Dimensions.SIZE_M},
  marginTop_L: {marginTop: Dimensions.SIZE_L},
  marginTop_XL: {marginTop: Dimensions.SIZE_XL},

  marginBottom_XS: {marginBottom: Dimensions.SIZE_XS},
  marginBottom_SM: {marginBottom: Dimensions.SIZE_SM},
  marginBottom_M: {marginBottom: Dimensions.SIZE_M},
  marginBottom_L: {marginBottom: Dimensions.SIZE_L},
  marginBottom_XL: {marginBottom: Dimensions.SIZE_XL},

  marginLeft_XS: {marginLeft: Dimensions.SIZE_XS},
  marginLeft_SM: {marginLeft: Dimensions.SIZE_SM},
  marginLeft_M: {marginLeft: Dimensions.SIZE_M},
  marginLeft_L: {marginLeft: Dimensions.SIZE_L},
  marginLeft_XL: {marginLeft: Dimensions.SIZE_XL},

  marginRight_XS: {marginRight: Dimensions.SIZE_XS},
  marginRight_SM: {marginRight: Dimensions.SIZE_SM},
  marginRight_M: {marginRight: Dimensions.SIZE_M},
  marginRight_L: {marginRight: Dimensions.SIZE_L},
  marginRight_XL: {marginRight: Dimensions.SIZE_XL},

  marginHorizontal_XS: {marginHorizontal: Dimensions.SIZE_XS},
  marginHorizontal_SM: {marginHorizontal: Dimensions.SIZE_SM},
  marginHorizontal_M: {marginHorizontal: Dimensions.SIZE_M},
  marginHorizontal_L: {marginHorizontal: Dimensions.SIZE_L},
  marginHorizontal_XL: {marginHorizontal: Dimensions.SIZE_XL},

  marginVertical_XS: {marginVertical: Dimensions.SIZE_XS},
  marginVertical_SM: {marginVertical: Dimensions.SIZE_SM},
  marginVertical_M: {marginVertical: Dimensions.SIZE_M},
  marginVertical_L: {marginVertical: Dimensions.SIZE_L},
  marginVertical_XL: {marginVertical: Dimensions.SIZE_XL},

  // Padding
  padding_XS: {padding: Dimensions.SIZE_XS},
  padding_SM: {padding: Dimensions.SIZE_SM},
  padding_M: {padding: Dimensions.SIZE_M},
  padding_L: {padding: Dimensions.SIZE_L},
  padding_XL: {padding: Dimensions.SIZE_XL},

  paddingTop_XS: {paddingTop: Dimensions.SIZE_XS},
  paddingTop_SM: {paddingTop: Dimensions.SIZE_SM},
  paddingTop_M: {paddingTop: Dimensions.SIZE_M},
  paddingTop_L: {paddingTop: Dimensions.SIZE_L},
  paddingTop_XL: {paddingTop: Dimensions.SIZE_XL},

  paddingBottom_XS: {paddingBottom: Dimensions.SIZE_XS},
  paddingBottom_SM: {paddingBottom: Dimensions.SIZE_SM},
  paddingBottom_M: {paddingBottom: Dimensions.SIZE_M},
  paddingBottom_L: {paddingBottom: Dimensions.SIZE_L},
  paddingBottom_XL: {paddingBottom: Dimensions.SIZE_XL},

  paddingLeft_XS: {paddingLeft: Dimensions.SIZE_XS},
  paddingLeft_SM: {paddingLeft: Dimensions.SIZE_SM},
  paddingLeft_M: {paddingLeft: Dimensions.SIZE_M},
  paddingLeft_L: {paddingLeft: Dimensions.SIZE_L},
  paddingLeft_XL: {paddingLeft: Dimensions.SIZE_XL},

  paddingRight_XS: {paddingRight: Dimensions.SIZE_XS},
  paddingRight_SM: {paddingRight: Dimensions.SIZE_M},
  paddingRight_L: {paddingRight: Dimensions.SIZE_L},
  paddingRight_XL: {paddingRight: Dimensions.SIZE_XL},

  paddingHorizontal_XS: {paddingHorizontal: Dimensions.SIZE_XS},
  paddingHorizontal_SM: {paddingHorizontal: Dimensions.SIZE_SM},
  paddingHorizontal_L: {paddingHorizontal: Dimensions.SIZE_L},
  paddingHorizontal_XL: {paddingHorizontal: Dimensions.SIZE_XL},

  paddingVertical_XS: {paddingHorizontal: Dimensions.SIZE_XS},
  paddingVertical_SM: {paddingVertical: Dimensions.SIZE_SM},
  paddingVertical_L: {paddingVertical: Dimensions.SIZE_L},
  paddingVertical_XL: {paddingVertical: Dimensions.SIZE_XL},

  // Overflow
  overflowHidden: {
    overflow: 'hidden',
  },

  // BorderRadius
  borderRadius_XS: {
    borderRadius: Dimensions.SIZE_XS,
  },
  borderRadius_SM: {
    borderRadius: Dimensions.SIZE_SM,
  },
  borderRadius_L: {
    borderRadius: Dimensions.SIZE_M,
  },

  // Border
  border: {
    borderColor: Colors.BORDER,
    borderWidth: 1,
  },
  borderTop: {
    borderColor: Colors.BORDER,
    borderTopWidth: 1,
  },
  borderBottom: {
    borderColor: Colors.BORDER,
    borderBottomWidth: 1,
  },

  // Width
  fullWidth: {
    width: '100%',
  },

  // Z-Index
  zIndex_XS: {
    zIndex: Dimensions.SIZE_XS,
  },
  zIndex_SM: {
    zIndex: Dimensions.SIZE_SM,
  },
  zIndex_L: {
    zIndex: Dimensions.SIZE_L,
  },
});

export default globalStyles;
