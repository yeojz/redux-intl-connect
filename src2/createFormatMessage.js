import invariant from 'invariant';
import cacheMessages from './cacheMessages';

function interpolate(message, values = {}) {
  if (message && typeof message === 'function') {
    return message(values);
  }

  return null;
}

function createFormatMessage(intl = {}) {
  const locale = intl.locale;

  if (!locale) {
    return () => '';
  }

  const messages = cacheMessages(intl);

  function formatMessage(messageDescriptor = {}, values = {}) {
    const { defaultMessage, id } = messageDescriptor;

    const message = messages[id] || '';

    if (process.env.NODE_ENV === 'production' && Object.keys(values).length < 1) {
      return interpolate(message) || defaultMessage || id;
    }

    if (!message && !defaultMessage) {
      invariant(message, `Missing message/defaultMessage: "${id}" for locale: "${locale}"`);
      return id;
    }

    return interpolate(message, values) || defaultMessage;
  }

  return formatMessage;
}

export default createFormatMessage;
