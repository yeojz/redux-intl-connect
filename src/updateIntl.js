import pick from 'lodash/pick';
import {UPDATE_ACTION} from './constants';
import {initialState} from './intlReducer';

const ACCEPTABLE_KEYS = Object.keys(initialState());

function updateIntl(keys = {}) {
  return {
    type: UPDATE_ACTION,
    payload: pick(keys, ACCEPTABLE_KEYS)
  }
}

export default updateIntl;
