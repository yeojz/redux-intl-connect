import { UPDATE_ACTION } from './constants';
import { getInitialState } from './intlReducer';

const ACCEPTABLE_KEYS = Object.keys(getInitialState());

function pick(translations) {
  try {
    return ACCEPTABLE_KEYS.reduce((accum, key) => {
      if (typeof translations[key] === 'string') {
        accum[key] = translations[key];
      }
      return accum;
    }, {});
  } catch (e) {
    return {};
  }
}

function updateIntl(translations = {}) {
  return {
    type: UPDATE_ACTION,
    payload: pick(translations)
  }
}

export default updateIntl;
