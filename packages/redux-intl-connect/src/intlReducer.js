import { UPDATE_ACTION } from './constants';

function getInitialState() {
  return {
    cacheDisable: false,
    ecmaSupport: false,
    locale: '',
    messages: {}
  }
}

function intlReducer(state = getInitialState(), action = {}) {

  if (!action || action.type !== UPDATE_ACTION) {
    return state;
  }

  return Object.assign({}, state, action.payload);
}

export { getInitialState };
export default intlReducer;
