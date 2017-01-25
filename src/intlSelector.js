import MessageFormat from 'messageformat';
import isEmpty from 'lodash/isEmpty';

export function createIntlSelector() {
  let cache = {};

  return (state = {}) => {
    const {intl} = state;

    if (isEmpty(intl) || !intl.locale) {
      cache = {}
      return cache;
    }

    if (cache.locale === intl.locale) {
      return cache;
    }

    const messages = new MessageFormat(intl.locale)
      .setIntlSupport(intl.ecmaSupport)
      .compile(intl.messages);

    cache = {...intl, messages}
    return cache;
  }
}

export default createIntlSelector();
