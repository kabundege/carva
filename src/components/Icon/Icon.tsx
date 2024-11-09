import React from 'react';

import {IconProps} from '../../types/icon.type';
import {Colors, Dimensions} from '../../styles';

const Icon: React.FC<IconProps> = ({
  type,
  name,
  color = Colors.DEFAULT,
  size = Dimensions.ICON_SIZE,
  style = {},
  ...textProps
}) => {
  switch (type) {
    case 'AntDesign': {
      const AntDesign = require('react-native-vector-icons/AntDesign').default;
      return (
        <AntDesign
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'Entypo': {
      const Entypo = require('react-native-vector-icons/Entypo').default;
      return (
        <Entypo
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'Ionicons': {
      const Ionicons = require('react-native-vector-icons/Ionicons').default;
      return (
        <Ionicons
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'Ionicons': {
      const Ionicons = require('react-native-vector-icons/Ionicons').default;
      return (
        <Ionicons
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'SimpleLineIcons': {
      const SimpleLineIcons =
        require('react-native-vector-icons/SimpleLineIcons').default;
      return (
        <SimpleLineIcons
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'EvilIcons': {
      const EvilIcons = require('react-native-vector-icons/EvilIcons').default;
      return (
        <EvilIcons
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'MaterialIcons': {
      const MaterialIcons =
        require('react-native-vector-icons/MaterialIcons').default;
      return (
        <MaterialIcons
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'FontAwesome': {
      const FontAwesome =
        require('react-native-vector-icons/FontAwesome').default;
      return (
        <FontAwesome
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'Foundation': {
      const Foundation =
        require('react-native-vector-icons/Foundation').default;
      return (
        <Foundation
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'MaterialCommunityIcons': {
      const MaterialCommunityIcons =
        require('react-native-vector-icons/MaterialCommunityIcons').default;
      return (
        <MaterialCommunityIcons
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'Zocial': {
      const Zocial = require('react-native-vector-icons/Zocial').default;
      return (
        <Zocial
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'Octicons': {
      const Octicons = require('react-native-vector-icons/Octicons').default;
      return (
        <Octicons
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'Fontisto': {
      const Fontisto = require('react-native-vector-icons/Fontisto').default;
      return (
        <Fontisto
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    case 'Feather': {
      const Feather = require('react-native-vector-icons/Feather').default;
      return (
        <Feather
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
    default: {
      const Ionicons = require('react-native-vector-icons/Ionicons').default;
      return (
        <Ionicons
          {...textProps}
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    }
  }
};

export default Icon;
