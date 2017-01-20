import invariant from 'invariant';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import template from 'lodash/template';
import templateSettings from 'lodash/templateSettings';

import {LOG_PREFIX} from './constants';
import {initialState} from './intlReducer';

const NODE_ENV = process.env.NODE_ENV;

function formatMessage(state = {}) {
  templateSettings.interpolate = state.pattern || initialState().pattern;

  return (messageDescriptor = {}, values = {}) => {

    const {
      id,
      defaultMessage,
    } = messageDescriptor;

    const message = get(state, ['messages', id], '');

    // Optimization: Avoid empty values in production, but allow in dev in case of error.
    if (NODE_ENV === 'production' && isEmpty(values)) {
      return message || defaultMessage || id;
    }

    invariant(message, `${LOG_PREFIX} Missing message: "${id}" for locale: "${state.locale}"`);

    if (!message && !defaultMessage) {
      invariant(false, `${LOG_PREFIX} No default message set. Using id: "${id}" as fallback`);
      return id;
    }

    return template(message || defaultMessage)(values);
  };
};

export default formatMessage;
