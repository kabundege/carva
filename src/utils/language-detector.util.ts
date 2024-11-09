import {LanguageDetectorAsyncModule} from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LANGUAGES} from '../enums';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: function (callback: (lang: string) => void) {
    try {
      AsyncStorage.getItem('APP:LANG').then(language => {
        if (language) {
          return callback(language);
        }

        return callback(LANGUAGES.kn);
      });
    } catch (error) {}
  },
  cacheUserLanguage: async function (language: string) {
    try {
      await AsyncStorage.setItem('APP:LANG', language);
    } catch (error) {}
  },
};

export default languageDetector;
