import i18n from '../translations/i18n';
import {ErrorResponse} from '../hooks/useFetch';
import {displayErrorMessage} from './toast.util';

export const HandleAxiosError = (error: any) => {
  const newError = error as ErrorResponse;

  console.log({error: newError});

  displayErrorMessage(
    i18n.t('Error'),
    newError.response?.data.message || error.message || error,
  );
};
