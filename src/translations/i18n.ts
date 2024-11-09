import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './languages/en.json';
import kn from './languages/kn.json';
import languageDetector from '../utils/language-detector.util';
import {LANGUAGES} from '../enums';

export const resources = {
  en: {
    translation: en,
  },
  nl: {
    translation: kn,
  },
} as const;

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources,
    fallbackLng: LANGUAGES.en,
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
