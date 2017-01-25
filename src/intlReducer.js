import {UPDATE_ACTION} from './constants';

export const initialState = () => ({
    ecmaSupport: false,
    locale: '',
    messages: {}
});

export function intlReducer(state = initialState(), action = {}) {

  if (action && action.type === UPDATE_ACTION) {
    return {
      ...state,
      ...action.payload
    };
  }

  return state;
}

export default intlReducer;
