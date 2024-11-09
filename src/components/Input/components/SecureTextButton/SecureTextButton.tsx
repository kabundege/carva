import React from 'react';
import Icon from '../../../Icon';
import {Colors, Dimensions} from '../../../../styles';
import {ViewStyle, TouchableOpacity, GestureResponderEvent} from 'react-native';

export type Props = {
  style: ViewStyle;
  isSecureText: boolean;
  setIsSecureText: (event: GestureResponderEvent) => void;
};

const SecureTextButton: React.FC<Props> = ({
  setIsSecureText,
  isSecureText,
  style,
}) => (
  <TouchableOpacity activeOpacity={0.8} onPress={setIsSecureText} style={style}>
    <Icon
      type="Ionicons"
      color={Colors.DEFAULT}
      size={Dimensions.FONT_SIZE_L}
      name={isSecureText ? 'eye-outline' : 'eye-off-outline'}
    />
  </TouchableOpacity>
);

export default SecureTextButton;
