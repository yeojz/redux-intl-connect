import MessageFormat from 'messageformat';
import isEmpty from 'lodash/isEmpty';

export function intlSelector(state = {}) {
  const {intl} = state;

  if (isEmpty(intl)) {
    return {};
  }

  const messages = new MessageFormat(intl.locale)
    .setIntlSupport(intl.ecmaSupport)
    .compile(intl.messages);

  return {
    ...intl,
    messages
  }
}

export default intlSelector;
