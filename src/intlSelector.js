import MessageFormat from 'messageformat';
import isEmpty from 'lodash/isEmpty';
import isImmutable from './utils/isImmutable';

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

const getIntl = (state) => (
  isImmutable(state.intl)
    ? state.intl.toJS()
    : state.intl
);

export function createIntlSelector() {
  let cache = {};

  return (state = {}) => {
    const intl = getIntl(state);

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
