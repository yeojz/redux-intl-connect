import invariant from 'invariant';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import template from 'lodash/template';
import templateSettings from 'lodash/templateSettings';

import {LOG_NAME, __DEV__} from './constants';
import {initialState} from './intlReducer';

function formatMessage(state = {}) {
  templateSettings.interpolate = state.pattern || initialState().pattern;

  return (messageDescriptor = {}, values = {}) => {

    const {
      id,
      defaultMessage,
    } = messageDescriptor;

    const message = get(state, ['messages', id], '');

    // Optimization: Avoid empty values in production, but allow in dev in case of error.
    if (isEmpty(values) && !__DEV__) {
      return message || defaultMessage || id;
    }

    invariant(message, `${LOG_NAME} Missing message: "${id}" for locale: "${state.locale}"`);

    if (!message && !defaultMessage) {
      invariant(false, `${LOG_NAME} No default message set. Using id: "${id}" as fallback`);
      return id;
    }

    return template(message || defaultMessage)(values);
  };
};

export default formatMessage;
