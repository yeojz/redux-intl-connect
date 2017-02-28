import invariant from 'invariant';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';

import getMessage from './utils/getMessage';
import getValue from './utils/getValue';
import {LOG_PREFIX} from './constants';

const ENV = process.env.NODE_ENV;

const parseMessage = (message, values = {}) => {
  if (message && isFunction(message)) {
    return message(values);
  }
  return void 0;
}

function formatMessage(state = {}) {
  const locale = getValue(state, 'locale');

  if (!locale) {
    return () => '';
  }

  return (messageDescriptor = {}, values = {}) => {

    const {
      id,
      defaultMessage,
    } = messageDescriptor;

    const message = getMessage(state, id);

    if (ENV === 'production' && isEmpty(values)) {
      return parseMessage(message) || defaultMessage || id;
    }

    if (!message && !defaultMessage) {
      invariant(message, `${LOG_PREFIX} Missing message/defaultMessage: "${id}" for locale: "${locale}"`);
      return id;
    }

    return parseMessage(message, values) || defaultMessage;
  };
}

export default formatMessage;
