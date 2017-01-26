# <img src="https://yeojz.github.io/redux-intl-connect/static/media/icon-with-text.0f6ad008.svg" alt="redux-intl-connect" height="60" />

[![Build Status][build-badge]][build-link]
[![Coverage Status][coveralls-badge]][coveralls-link]
[![npm package][npm-badge]][npm-link]
[![PRs Welcome][pr-welcome-badge]][pr-welcome-badge]

## About
`redux-intl-connect` is a redux `connect` agnostic binding for internationalizing your application, with support for [ICU MessageFormat](http://userguide.icu-project.org/formatparse/messages).

This library does not depend on the ECMAScript Internationalization API. It currently provides a single method: `formatMessage` with it's API inspired by the FormatJS library `formatMessage` method signature.

It is NOT meant to have a 100% feature parity with the redux bindings for FormatJS. Extending to other translation methods will be considered if it fulfills point 1 under "Why" below.

## Why
FormatJS and it's corresponding bindings for React, Ember, Angular with Redux are great. However, 2 use cases in other projects led to this:

 1. Location with slow internet speed and older browsers, meant the need for polyfills due to the absence of ECMAScript Internationalization API. This also means a relatively large dependency download which is not ideal.
 1. The main function in use was `formatMessage`.

## Example Usage:

 - [Project Website](https://yeojz.github.io/redux-intl-connect)
 - [Source](https://github.com/yeojz/redux-intl-connect/tree/master/src)

## Installation

Install the library:

```
npm install redux-intl-connect redux --save
```

Install a corresponding redux connect library. Examples:

```
npm install react-redux
npm install preact-redux
npm install ng-redux
```

## Usage

In this example, I'm going to use `react` / `react-redux` and also assume the messages object in reducer has the following messages:

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
// eg: import connect from '<folder-path>/connector'
const connector = connectIntl(connect);

const propTypes = {
  intl: PropTypes.object
}

const Component = (props) => (
  <div>
    {props.intl.formatMessage({id: 'myMessageKey'}, {name: 'World'})}
  </div>
);

Component.propTypes = propTypes;

// Your standard redux stuff.
const mapStateToProps = (state) => ({
});
const mapDispatchToProps = {
}

export default connector(mapStateToProps, mapDispatchToProps)(Component);
```

**App.js**

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
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

### Provide `locale` and `messages` upon loading the store

You should provide a default `locale` and `messages` when the store is initially loaded.

```js
const initialState = {
  intl: {
    locale: 'it',
    messages: {
      'greeting': 'Ciao!',
    },
  },
  // ...other initialState
};

const store = createStore(reducer, initialState);
```

### Switching `locale` and `messages` on demand

You could switch `locale` on user's request by dispatching `updateIntl` action.

```js
import {updateIntl} from 'redux-intl-connect';

store.dispatch(updateIntl({
  locale,
  messages,
}));
```

*In a "real-world" scenario*, an action will be dispatched to fetch translations from a server before `updateIntl` is being called. An possible example with `redux-thunk` would be:

```js
import {updateIntl} from 'redux-intl-connect';

const getAndUpdateIntl = (locale) => (dispatch) => {

  fetch('url-to-messages')
    .then(function(response) {
       return response.text()
     })
    .then((body) => {
        dispatch(updateIntl({
          locale,
          messages: body
        }))
    });
}
```

## ECMA Intl Support

While it is not the goal of this project, as stated above (in `Why, Point 1`), the `messageformat` package which was introduced as the dependent library in v2, has optional support for browser ECMAScript Intl.

As such, you can optionally turn on this support by dispatching or setting `ecmaSupport` value in the reducer to `true`. You'll need the corresponding polyfill if you want cross browser version support.

For more information about the extended support, check out the [messageformat documentation](https://messageformat.github.io/guide/)

```js
store.dispatch(updateIntl({ecmaSupport: true}));
```

## Links

- [Contributing Guide](./CONTRIBUTING.md)

## License

`redux-intl-connect` is [BSD licensed](./LICENSE)

## Acknowledgement

Highly influenced by the following libraries:

- [react-intl](https://github.com/yahoo/react-intl)
- [react-intl-redux](https://github.com/ratson/react-intl-redux)

ICU MessageFormat parsing is done via [messageformat](https://github.com/messageformat/messageformat.js) package.

[npm-badge]: https://img.shields.io/npm/v/redux-intl-connect.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/redux-intl-connect

[build-badge]: https://img.shields.io/travis/yeojz/redux-intl-connect.svg?style=flat-square
[build-link]: https://travis-ci.org/yeojz/redux-intl-connect

[coveralls-badge]: https://img.shields.io/coveralls/yeojz/redux-intl-connect.svg?style=flat-square
[coveralls-link]: https://coveralls.io/github/yeojz/redux-intl-connect

[pr-welcome-badge]: https://img.shields.io/badge/PRs-Welcome-ff69b4.svg?style=flat-square
[pr-welcome-link]: https://github.com/yeojz/redux-intl-connect/blob/master/CONTRIBUTING.md
