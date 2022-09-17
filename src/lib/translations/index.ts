import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
const config = {
  translations: {
    en: { lang },
    ru: { lang }
  },
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (await import('./en/common.json')).default
    },
    {
      locale: 'en',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./en/home.json')).default
    },
    {
      locale: 'en',
      key: 'about',
      routes: ['/about'],
      loader: async () => (await import('./en/about.json')).default
    },
    {
      locale: 'ru',
      key: 'common',
      loader: async () => (await import('./ru/common.json')).default
    },
    {
      locale: 'ru',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./ru/home.json')).default
    },
    {
      locale: 'ru',
      key: 'about',
      routes: ['/about'],
      loader: async () => (await import('./ru/about.json')).default
    },
  ]
};

export const defaultLocale = 'en';
export const { t, locale, locales, loading, loadTranslations } = new i18n(config);