import {TouchableOpacity, ViewStyle, ActivityIndicator} from 'react-native';
import React, {FC, ReactNode} from 'react';
import styles from './IconButton.styles';
import ButtonType from '../../enums/button-type.enum';
import {Colors} from '../../styles';

export type IconButtonProps = {
  Icon?: any;
  name?: string;
  size?: number;
  color?: string;
  type?: ButtonType;
  isLoading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  children?: ReactNode;
  iconStyles?: ViewStyle;
  style?: ViewStyle[] | ViewStyle;
};

const IconButton: FC<IconButtonProps> = ({
  Icon,
  onPress,
  iconStyles,
  name,
  size,
  color,
  type,
  children,
  style,
  isLoading = false,
  disabled,
}) => {
  const icon = () => (
    <Icon name={name} size={size} color={color} style={iconStyles} />
  );

  const kids = isLoading ? (
    <ActivityIndicator size={size} color={color || Colors.DEFAULT} />
  ) : (
    children || icon()
  );

  const opacityStyles = {opacity: disabled ? 0.6 : 1};

  if (type === ButtonType.SECONDARY) {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[styles.secondary, opacityStyles, style]}>
        {kids}
      </TouchableOpacity>
    );
  }

  if (type === ButtonType.DARK) {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[styles.dark, opacityStyles, style]}>
        {kids}
      </TouchableOpacity>
    );
  }

  if (type === ButtonType.INVERSE) {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[styles.inverse, opacityStyles, style]}>
        {kids}
      </TouchableOpacity>
    );
  }

  if (type === ButtonType.TRANSPARENT) {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[styles.transparent, opacityStyles, style]}>
        {kids}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.primary, opacityStyles, style]}>
      {kids}
    </TouchableOpacity>
  );
};

export default IconButton;
