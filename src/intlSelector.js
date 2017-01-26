import MessageFormat from 'messageformat';
import isEmpty from 'lodash/isEmpty';

const isIntlValid = (intl) => (
  !isEmpty(intl) && intl.locale
);

const isCacheHit = (intl, cache) => (
  cache.locale === intl.locale
  && !intl.cacheDisable
);

const compileMessages = (intl) => (
  new MessageFormat(intl.locale)
    .setIntlSupport(intl.ecmaSupport)
    .compile(intl.messages)
);

export function createIntlSelector() {
  let cache = {};

  return (state = {}) => {
    const {intl} = state;

    if (!isIntlValid(intl)) {
      cache = {}
      return cache;
    }

    if (isCacheHit(intl, cache)) {
      return cache;
    }

    cache = {
      ...intl,
      messages: compileMessages(intl)
    }

    return cache;
  }
}

export default createIntlSelector();
