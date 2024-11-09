import 'react-i18next';
import {resources} from './src/translations/i18n';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: (typeof resources)['en'];
  }
}
