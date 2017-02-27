import invariant from 'invariant';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';

import {LOG_PREFIX} from './constants';

const ENV = process.env.NODE_ENV;

function parseMessage(message, values = {}) {
  if (message && isFunction(message)) {
    return message(values);
  }
  return void 0;
}

function getMessage(state, id) {
  if (isFunction(state.get)) {
    return state.get(['messages', 'id']) || '';
  }
  return get(state, ['messages', id], '');
}

function formatMessage(state = {}) {

  if (!state.locale) {
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
      invariant(message, `${LOG_PREFIX} Missing message/defaultMessage: "${id}" for locale: "${state.locale}"`);
      return id;
    }

    return parseMessage(message, values) || defaultMessage;
  };
}

export default formatMessage;
