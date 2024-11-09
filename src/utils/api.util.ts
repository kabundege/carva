import {REQUEST_TIMEOUT_DURATION, TIMEOUT_ERROR_MESSAGE} from '../constants';
import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';
import {store} from '../store';

type APIProps = (arg?: {token?: string; customURL?: string}) => AxiosInstance;

const api: APIProps = props => {
  const options: AxiosRequestConfig = {
    baseURL: props?.customURL || Config.BASE_URL,
    responseType: 'json',
    headers: {
      'User-Agent': 'Weidemonitor App',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With',
      Authorization:
        props?.token || store.getState().auth.token
          ? `Bearer ${props?.token || store.getState().auth.token}`
          : undefined,
      timeout: REQUEST_TIMEOUT_DURATION,
      Accept: 'application/json',
    },
    timeoutErrorMessage: TIMEOUT_ERROR_MESSAGE,
    timeout: REQUEST_TIMEOUT_DURATION,
  };

  return axios.create(options);
};

export default api;
