import MessageFormat from 'messageformat';

const isCacheHit = (intl, cacheLocale) => (
  cacheLocale === intl.locale
  && !intl.cacheDisable
);

const compileMessages = (intl) => (
  new MessageFormat(intl.locale)
    .setIntlSupport(intl.ecmaSupport)
    .compile(intl.messages)
);

function createCacheMessages() {
  let locale = '';
  let messages = {};

  function cacheMessages(intl) {

    if (!intl.locale) {
      return {};
    }

    if (isCacheHit(intl, locale)) {
      return messages;
    }

    locale = intl.locale;
    messages = compileMessages(intl);
    return messages;
  }

  return cacheMessages;
}

export default createCacheMessages();
