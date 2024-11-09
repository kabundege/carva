import React from 'react';
import {Text as RNText, TextProps, TextStyle} from 'react-native';
import {Fonts, Typography} from '../../styles';
import styles from './Text.styles';

export type Props = TextProps & {
  title?: boolean;
  subtitle?: boolean;
  body?: boolean;
  caption?: boolean;
  captionLarge?: boolean;
  label?: boolean;
  button?: boolean;
  size?: number;
  color?: string;
  black?: boolean;
  extraBold?: boolean;
  bold?: boolean;
  semiBold?: boolean;
  medium?: boolean;
  light?: boolean;
  extraLight?: boolean;
  thin?: boolean;
  center?: boolean;
  capitalize?: boolean;
  uppercase?: boolean;
  underline?: boolean;
  style?: TextStyle;
};

const Text: React.FC<Props> = ({
  title,
  subtitle,
  body,
  caption,
  captionLarge,
  label,
  button,
  size,
  color,
  black,
  extraBold,
  bold,
  semiBold,
  medium,
  light,
  extraLight,
  thin,
  center,
  underline,
  style,
  children,
  capitalize,
  uppercase,
  ...rest
}) => {
  const textStyle: TextStyle[] | any = [
    styles.default,
    title && Typography.title,
    subtitle && Typography.subtitle,
    body && Typography.body,
    caption && Typography.caption,
    captionLarge && Typography.captionLarge,
    label && Typography.label,
    button && Typography.button,
    size && {fontSize: size},
    color && {color},
    bold && Fonts.bold,
    black && Fonts.black,
    extraBold && Fonts.extraBold,
    bold && Fonts.bold,
    semiBold && Fonts.semibold,
    medium && Fonts.medium,
    light && Fonts.light,
    extraLight && Fonts.extraLight,
    thin && Fonts.thin,
    center && styles.center,
    capitalize && styles.capitalize,
    uppercase && styles.uppercase,
    underline && styles.underline,
    style && style,
  ];

  return (
    <RNText style={textStyle} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
