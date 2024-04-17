import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import enCommon from './public/locales/en/common.json'
import deCommon from './public/locales/en/common.json'

i18next
  .use(RNLanguageDetector) // Add the language detector
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    supportedLngs: ['en', 'de'],
    ns: [],
    defaultNS: undefined,

    resources: {
      en: {
        common: enCommon,
      },
      de: {
        common: deCommon,
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;