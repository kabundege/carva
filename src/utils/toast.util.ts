import Toast from 'react-native-toast-message';
import ToastType from '../enums/toast-type.enum';

export const displaySuccessMessage = (
  title: string,
  message: string,
  autoHide = true,
) => {
  Toast.show({
    type: ToastType.SUCCESS,
    visibilityTime: 3000,
    position: 'top',
    text2: message,
    text1: title,
    autoHide,
  });
};

export const displayInfoMessage = (
  title: string,
  message: string,
  autoHide = true,
) => {
  Toast.show({
    type: ToastType.INFO,
    visibilityTime: 3000,
    position: 'top',
    text2: message,
    text1: title,
    autoHide,
  });
};

export const displayErrorMessage = (
  title: string,
  message: string,
  autoHide = true,
) => {
  Toast.show({
    type: ToastType.ERROR,
    visibilityTime: 3000,
    position: 'top',
    text2: message,
    text1: title,
    autoHide,
  });
};
