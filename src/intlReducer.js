import {LOCALE_UPDATE} from './constants';

export const initialState = () => ({
    locale: 'en',
    messages: {},
    pattern: /{([\s\S]+?)}/g
});

function intlReducer(state = initialState(), action = {}) {

    if (action.type === LOCALE_UPDATE) {
        return {
          ...state,
          ...action.payload
        };
    }

    return state;
};

export default intlReducer;
