import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {intlReducer} from 'redux-intl-connect';
import locale from './locale';
import App from './custom/App';
import 'basscss/css/basscss.css';
import 'basscss-forms/index.css';
import './index.css';

const reducer = combineReducers({
  intl: intlReducer
});

const initialState = {
  intl: locale.en_US
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
