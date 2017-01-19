# redux-intl-connect
Redux connect agnostic bindings for i18n with formatMessage-like API.

## Why
FormatJS and it's corresponding bindings for React, Ember, Angular is great.

However, 2 use cases led to this project:
 1. Location with slow internet speed and old browsers, meant the need for polyfills due to the absence of ECMAScript Internationalization API in older browsers. This also means a relatively large dependency download which is not ideal.
 1. The only method you use might be formatMessage or a very small subset.

## About
This library is not meant to be a 100% feature parity with the FormatJS bindings. It aims to
provide only basic functionality for use with your own custom message strings.

Extending to other translation methods will be considered provided it fulfills point 1 on the above use case.

Current it only supports `formatMessage` and provides a similar API influenced by the original library bindings.

## Installation
Install the library:

```
npm install redux-intl-connect --save
```

Install a corresponding redux connect library:

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
import reducers from '<path-to-reducer>';

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

## License
redux-intl-connect is [BSD licensed](./LICENSE)

**Acknowledgement**

 - [react-intl](https://github.com/yahoo/react-intl)
 - [react-intl-redux](https://github.com/ratson/react-intl-redux)
