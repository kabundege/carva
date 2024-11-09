import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  ViewStyle,
  ViewProps,
  TextInputProps,
  Pressable,
} from 'react-native';
import Text from '../Text';
import {SecureTextButton} from './components';
import {Colors, Dimensions, globalStyles} from '../../styles';
import styles from './Input.styles';
import Spacer from '../Spacer';
import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';

export interface InputProps {
  label?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  labelRight?: React.ReactNode;
  miniLabelLeft?: React.ReactNode;
  error?: string;
  help?: string;
  style?: ViewStyle;
  onPress?: () => void;
  labelStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  TextInputStyle?: ViewStyle;
}

export type Props = TextInputProps & ViewProps & InputProps;

const Input = React.forwardRef<TextInput, Props>(
  (
    {
      label,
      placeholder,
      placeholderTextColor,
      secureTextEntry,
      TextInputStyle,
      miniLabelLeft,
      labelRight,
      inputStyle,
      labelStyle,
      rightIcon,
      leftIcon,
      error,
      style,
      onPress,
      ...rest
    },
    ref,
  ) => {
    const [isSecureText, setIsSecureText] = useState<boolean>(false);
    useEffect(() => {
      if (secureTextEntry) {
        setIsSecureText(secureTextEntry);
      }
    }, [secureTextEntry]);

    return (
      <Pressable onPress={onPress} style={[styles.item, style]}>
        {label ? (
          <View style={styles.labelView}>
            <View style={globalStyles.flex}>
              <Text
                bold
                label
                capitalize
                size={Dimensions.FONT_SIZE_SM}
                color={Colors.DEFAULT}
                style={labelStyle}>
                {label}
              </Text>
              {miniLabelLeft && miniLabelLeft}
            </View>
            {labelRight && labelRight}
          </View>
        ) : null}
        <View style={[styles.inputView, inputStyle]}>
          {leftIcon && (
            <>
              <Spacer margin={Dimensions.SIZE_XS} />
              {leftIcon}
            </>
          )}
          <TextInput
            ref={ref}
            placeholder={placeholder}
            placeholderTextColor={
              placeholderTextColor || Colors.PLACEHOLDER_TEXT
            }
            style={[styles.input, TextInputStyle]}
            underlineColorAndroid="transparent"
            secureTextEntry={isSecureText}
            {...rest}
          />
          {secureTextEntry ? (
            <>
              <SecureTextButton
                style={styles.rightIcon}
                isSecureText={isSecureText}
                setIsSecureText={() => setIsSecureText(!isSecureText)}
              />
              <Spacer margin={Dimensions.SIZE_XS} />
            </>
          ) : null}
          {rightIcon && (
            <>
              {rightIcon}
              <Spacer margin={Dimensions.SIZE_XS} />
            </>
          )}
        </View>
        {error ? (
          <Animated.View
            entering={FadeInUp}
            exiting={FadeOutUp}
            style={styles.error}>
            <Text caption color={Colors.DANGER}>
              {error}
            </Text>
          </Animated.View>
        ) : null}
      </Pressable>
    );
  },
);

export default Input;
