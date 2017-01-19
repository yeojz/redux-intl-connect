const isDevelopment = () => (
  process.env.NODE_ENV !== 'production'
);

export const LOCALE_UPDATE = '@@i18n/LOCALE_UPDATE';
export const LOG_NAME = '[redux-intl-connect]';
export const __DEV__ = isDevelopment();
