import {Alert} from 'react-native';
import i18n from '../translations/i18n';

// Reusable cancelable alert
export const showCancelableAlert = (
  title: string,
  message: string,
  onConfirm: () => void,
  onCancel?: () => void,
) => {
  Alert.alert(
    title,
    message,
    [
      {
        style: 'cancel',
        onPress: onCancel,
        text: i18n.t('cancel'),
      },
      {
        text: i18n.t('ok'),
        onPress: onConfirm,
      },
    ],
    {cancelable: true},
  );
};

// Reusable non-cancelable alert
export const showNonCancelableAlert = (
  title: string,
  message: string,
  onConfirm: () => void,
) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: i18n.t('ok'),
        onPress: onConfirm,
      },
    ],
    {cancelable: false},
  );
};
