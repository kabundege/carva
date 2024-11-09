import {LinkingOptions} from '@react-navigation/native';
import RouteNames from './routing-config';

const config = {
  screens: {
    [RouteNames.screens.ResetPassword]: {
      path: '/auth/reset-password',
      parse: {
        'reset-token': (resetToken: string) => `${resetToken}`,
      },
    },
  },
};

const linking: LinkingOptions<{}> = {
  prefixes: ['app://www.app.com'],
  config,
};

export default linking;
