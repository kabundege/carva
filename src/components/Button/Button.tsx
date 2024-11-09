import React, {ReactNode} from 'react';
import {
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';

import ButtonType from '../../enums/button-type.enum';
import {Colors, Dimensions} from '../../styles';
import styles from './Button.styles';
import Text from '../Text';

export type Props = TouchableOpacityProps & {
  type?: ButtonType;
  radius?: number;
  isLoading?: boolean;
  loadingSize?: 'small' | 'large';
  loadingColor?: string;
  textStyle?: TextStyle;
  iconStyle?: TextStyle;
  style?: ViewStyle;
  label?: string | Element;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
};

const Button: React.FC<Props> = ({
  type = ButtonType.PRIMARY,
  radius,
  isLoading,
  loadingSize,
  loadingColor,
  textStyle,
  style,
  label,
  rightIcon,
  leftIcon,
  ...rest
}) => {
  const getButtonType = (buttonType: ButtonType) => {
    switch (buttonType) {
      case ButtonType.PRIMARY:
        return styles.primary;
      case ButtonType.SECONDARY:
        return styles.secondary;
      case ButtonType.DARK:
        return styles.dark;
      case ButtonType.DANGER:
        return styles.danger;
      case ButtonType.TRANSPARENT:
        return styles.transparent;
      case ButtonType.SUCCESS:
        return styles.success;
      case ButtonType.INVERSE:
        return styles.inverse;
      default:
        return styles.primary;
    }
  };

  const getTextType = (buttonType: ButtonType) => {
    switch (buttonType) {
      case ButtonType.PRIMARY:
        return styles.primaryText;
      case ButtonType.TRANSPARENT:
        return styles.text;
      case ButtonType.SECONDARY:
        return styles.textSecondary;
      case ButtonType.DARK:
        return styles.textDark;
      case ButtonType.DANGER:
        return styles.textDanger;
      case ButtonType.SUCCESS:
        return styles.textSuccess;
      case ButtonType.INVERSE:
        return styles.textInverse;
      default:
        return styles.text;
    }
  };

  const renderContent = () => {
    const textStyles = [styles.text, getTextType(type), textStyle];
    /**
     * Fade the text when
     * @isLoading is True
     */
    return (
      <>
        {isLoading ? (
          <ActivityIndicator
            size={loadingSize}
            style={{position: 'absolute'}}
            color={loadingColor || Colors.WHITE}
          />
        ) : (
          <>
            {leftIcon}
            <Text
              bold
              button
              center
              numberOfLines={1}
              size={Dimensions.FONT_SIZE_SM}
              style={[
                textStyles,
                {
                  letterSpacing: 1,
                  opacity: isLoading ? 0 : 1,
                  marginLeft: leftIcon ? Dimensions.SIZE_XS : 0,
                  marginRight: rightIcon ? Dimensions.SIZE_XS : 0,
                },
              ]}>
              {label as any}
            </Text>
            {rightIcon}
          </>
        )}
      </>
    );
  };

  const buttonStyles = [
    styles.button,
    getButtonType(type),
    radius && {borderRadius: radius},
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles as ViewStyle}
      disabled={isLoading}
      {...rest}>
      {renderContent()}
    </TouchableOpacity>
  );
};

export default Button;
