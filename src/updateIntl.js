import pick from 'lodash/pick';
import {initialState, LOCALE_UPDATE} from './intlReducer';

const ACCEPTABLE_KEYS = Object.keys(initialState());

function updateIntl(keys = {}) {
  return {
    type: LOCALE_UPDATE,
    payload: pick(keys, ACCEPTABLE_KEYS)
  };
}

export default updateIntl;
