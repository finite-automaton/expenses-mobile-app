import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import enCommon from './public/locales/en/common.json'
import enSettings from './public/locales/en/settings.json'
import deCommon from './public/locales/de/common.json'
import deSettings from './public/locales/de/settings.json'

i18next
  .use(RNLanguageDetector) // Add the language detector
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    supportedLngs: ['en', 'de'],
    ns: [],
    defaultNS: 'common',

    resources: {
      en: {
        common: enCommon,
        settings: enSettings,
      },
      de: {
        common: deCommon,
        settings: deSettings
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;