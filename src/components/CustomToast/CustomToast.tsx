import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import ToastType from '../../enums/toast-type.enum';
import styles from './CustomToast.styles';
import {Colors} from '../../styles';
import Text from '../Text';

export type Props = {
  type: string;
  title?: string;
  message?: string;
};

const CustomToast: React.FC<Props> = ({type, title, message}) => {
  const renderIcon = () => {
    switch (type) {
      case ToastType.SUCCESS:
        return (
          <Icon
            name="checkmark"
            color={Colors.PRIMARY}
            size={24}
            style={styles.icon}
          />
        );

      case ToastType.ERROR:
        return (
          <Icon
            name="close"
            color={Colors.DANGER}
            size={24}
            style={styles.icon}
          />
        );

      default:
        return (
          <Icon
            size={24}
            name="information"
            style={styles.icon}
            color={Colors.PRIMARY}
          />
        );
    }
  };

  const getColorStyle = () => {
    switch (type) {
      case ToastType.SUCCESS:
        return {borderLeftColor: Colors.PRIMARY};

      case ToastType.ERROR:
        return {borderLeftColor: Colors.DANGER};

      default:
        return {borderLeftColor: Colors.PRIMARY};
    }
  };

  return (
    <View style={[styles.container, getColorStyle()]}>
      {renderIcon()}
      <View style={styles.content}>
        <Text medium color={Colors.DARK_INDIGO} style={styles.title}>
          {title}
        </Text>
        <Text caption color={Colors.DARK_SILVER} style={styles.message}>
          {message}
        </Text>
      </View>
    </View>
  );
};

export default CustomToast;
