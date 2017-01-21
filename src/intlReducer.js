import {UPDATE_ACTION, VARIABLE_PATTERN} from './constants';

export const initialState = () => ({
    locale: 'en',
    messages: {},
    pattern: VARIABLE_PATTERN
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
