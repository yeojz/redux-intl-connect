# redux-intl-connect [![npm package][npm-badge]][npm-link]

Redux connect agnostic bindings for i18n with formatMessage-like API.

[![Build Status][build-badge]][build-link]

## Why
FormatJS and it's corresponding bindings for React, Ember, Angular with Redux is great.

However, 2 use cases in other projects led to this repository:
 1. Location with slow internet speed and older browsers, meant the need for polyfills due to the absence of ECMAScript Internationalization API. This also means a relatively large dependency download which is not ideal.
 1. The main function in use was `formatMessage`.

## About
This library is not meant to be a 100% feature parity with the FormatJS and Redux bindings. It aims to
provide only basic functionality for use with your own custom message strings.

Current it only supports `formatMessage` and provides a similar API influenced by the original library bindings.
Extending to other translation methods will be considered provided it fulfills point 1 above.


## Installation
Install the library:

```
npm install redux-intl-connect --save
```

Install a corresponding redux connect library. Examples:

```
npm install react-redux
npm install preact-redux
npm install ng-redux
```

## Usage

In this example, I'm going to use `react` / `react-redux` and also assume the messages object in reducer has the following:

```json
messages: {
  "myMessageKey": "Hello {name}"
}
```

**Component.js**

```js
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {connectIntl} from 'redux-intl-connect';

// Initialize connector.
// You can put this in another file and import that file instead
// if you do not want to do do this all the time.
// eg: import connect from '<folder-path>/connected'
const connector = connectIntl(connect);

const propTypes = {
  intl: PropTypes.object
}

const Component = (props) => (
  <div>
    {props.intl.formatMessage({id: 'myMessageKey'}, {name: 'World'})}
  </div>
)

Component.propTypes = propTypes;

// Your standard redux stuff.
const mapStateToProps = (state) => ({})
const mapDispatchToProps = {}

export default connector(mapStateToProps, mapDispatchToProps)(Component);
```

**App.js**

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {intlReducer} from 'redux-intl-connect';

import Component from './Component';
import reducers from '<folder-path>/reducers';

const reducer = combineReducers({
  ...reducers,
  intl: intlReducer,
});

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Component />
  </Provider>
);

ReactDOM.render(App, document.getElementById('container'));

// container element should contain:
// <div>Hello World</div>
```

### Provide `locale` and `messages` on load

You should provide a different `locale` and `messages` if your user is not using `en` locale.

```js
const initialState = {
  intl: {
    locale: 'it',
    messages: {
      'app.greeting': 'Ciao!',
    },
  },
  // ...other initialState
};

const store = createStore(reducer, initialState);
```


### Switch `locale` and `messages` on request

You could also switch `locale` on user's request by dispatching `updateIntl` action.

```js
import {updateIntl} from 'redux-intl-connect';

store.dispatch(updateIntl({
  locale,
  messages,
}));
```

## Contribute
Any contributions or suggestions to make this library better are welcomed.

## License

`redux-intl-connect` is [BSD licensed](./LICENSE)

##Acknowledgement

Highly influenced by the following:
 - [react-intl](https://github.com/yahoo/react-intl)
 - [react-intl-redux](https://github.com/ratson/react-intl-redux)

 [npm-badge]: https://img.shields.io/npm/v/redux-intl-connect.svg?style=flat-square
 [npm-link]: https://www.npmjs.com/package/redux-intl-connect

 [build-badge]: https://img.shields.io/travis/yeojz/redux-intl-connect.svg?style=flat-square
 [build-link]: https://travis-ci.org/yeojz/redux-intl-connect
