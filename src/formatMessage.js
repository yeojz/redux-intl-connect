import invariant from 'invariant';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import template from 'lodash/template';
import templateSettings from 'lodash/templateSettings';

import {LOG_PREFIX, VARIABLE_PATTERN} from './constants';

let ENV = process.env.NODE_ENV;

function formatMessage(state = {}) {
  templateSettings.interpolate = state.pattern || VARIABLE_PATTERN;

  return (messageDescriptor = {}, values = {}) => {

    const {
      id,
      defaultMessage,
    } = messageDescriptor;

    const message = get(state, ['messages', id], '');

    // Optimization: Immediately returns possible values
    if (ENV === 'production' && isEmpty(values)) {
      return message || defaultMessage || id;
    }

    if (!message && !defaultMessage) {
      invariant(message, `${LOG_PREFIX} Missing message/defaultMessage: "${id}" for locale: "${state.locale}"`);
      return id;
    }

    return template(message || defaultMessage)(values);
  };
}

export default formatMessage;
