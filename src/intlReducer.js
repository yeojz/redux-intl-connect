import isImmutable from './utils/isImmutable';
import {UPDATE_ACTION} from './constants';

function initialState() {
  return {
    cacheDisable: false,
    ecmaSupport: false,
    locale: '',
    messages: {}
  }
}

function setImmutable(state, payload) {
  return state.merge(payload);
}

function intlReducer(state = initialState(), action = {}) {

  if (!action || action.type !== UPDATE_ACTION) {
    return state;
  }

  if (isImmutable(state)) {
    return setImmutable(state, action.payload);
  }

  return {
    ...state,
    ...action.payload
  }
}

export {initialState as initialState};
export default intlReducer;
