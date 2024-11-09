import {Platform} from 'react-native';
import {queryKeys} from './queryKeys';

const isIos = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const TRUCK_INSPECTION_STEPS = 5;
const NEW_ORDER_STEPS = 3;
const DATE_FORMAT = 'DD MMM YYYY';
const HOUR_FORMAT = 'hh:mm A';
const TIMEOUT_ERROR_MESSAGE = 'Request timed out';
const ANALYTICS_EVENTS = {
  NETWORK_REQUEST_FAILURE: 'Network Request Failure',
};
const PHOTO_ALBUM_NAME = 'nsfo';

const REQUEST_RETRY_DELAY = 1000;
const REQUEST_TIMEOUT_DURATION = 5000;
const MS_PER_DAY = 1000 * 60 * 60 * 24;
const QUERY_CACHE_DURATION = MS_PER_DAY * 1;

export {
  isIos,
  queryKeys,
  isAndroid,
  HOUR_FORMAT,
  DATE_FORMAT,
  NEW_ORDER_STEPS,
  PHOTO_ALBUM_NAME,
  REQUEST_RETRY_DELAY,
  TRUCK_INSPECTION_STEPS,
  REQUEST_TIMEOUT_DURATION,
  TIMEOUT_ERROR_MESSAGE,
  QUERY_CACHE_DURATION,
  ANALYTICS_EVENTS,
};
