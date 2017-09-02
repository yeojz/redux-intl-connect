# <img src="https://yeojz.github.io/redux-intl-connect/static/media/icon-with-text.0f6ad008.svg" alt="redux-intl-connect" height="60" />

> Redux connect-agnostic library providing i18n and ICU Message Syntax support (Ember, Preact, React etc)

[![Build Status][build-badge]][build-link]
[![Coverage Status][coveralls-badge]][coveralls-link]
[![npm package][npm-badge]][npm-link]
[![PRs Welcome][pr-welcome-badge]][pr-welcome-link]

- [About](#about)
- [Motivation](#motivation)
- [Demo](#demo)
- [Installation](#installation)
- [Usage Guides](#usage-guides)
- [Features](#features)
  - [MessageFormat Syntax](#messageformat-syntax)
  - [Optional ECMA Intl Support](#optional-ecma-intl-support)
- [Available Methods](#available-methods)
  - [Provide `locale` and `messages` onload](#provide-`locale`-and-`messages`-onload)
  - [Switching `locale` and `messages` on demand](#switching-`locale`-and-`messages`-on-demand)
- [Specific Implementations](#specific-implementations)
- [License](#license)
- [Acknowledgement](#acknowledgement)

## About

`redux-intl-connect` is a `connect` agnostic binding for internationalizing your application, with support for [ICU MessageFormat](http://userguide.icu-project.org/formatparse/messages).

As the library contains mainly higher-order functions, it is not restricted to just the commonly used `react-redux`. It easily used together with `ember-redux`, `preact-redux` and other redux bindings that provide the same `connect` interface.

## Motivation

This library **does not** depend on polyfills and/or the [ECMAScript Internationalization API](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl). It provides a single method: `formatMessage` with it's API inspired by the FormatJS counterpart.

FormatJS and it's corresponding bindings for the different frameworks are great, but 2 use cases in some of my projects led to this:

1.  Location with older browsers meant the need for polyfills due to the absence of ECMAScript Internationalization API. However, these places are also highly likely to have slower internet speeds. As such a relatively large dependency download which is not ideal.
1.  Only functionality provided by `formatMessage` is required.

## Demo

-   [Demo Site](https://yeojz.github.io/redux-intl-connect)
-   [Demo Source](https://github.com/yeojz/redux-intl-connect/tree/master/site)

## Installation

```
> npm install redux-intl-connect redux --save
```

Install a corresponding redux connect library. Examples:

```
> npm install react-redux
> npm install preact-redux
> npm install ember-redux
```

## Usage Guides

-   [React Usage Guide](./docs/react.md)

## Features

### MessageFormat Syntax

For example:

```js
// Messages in the reducer:
{
    someKey: 'You {NUM_ADDS, plural, offset:1' +
        '=0{did not add this}' +
        '=1{added this}' +
        'one{and one other person added this}' +
        'other{and # others added this}' +
      '}.',

    otherKey: '{GENDER, select, male{He} female{She} other{They}} liked this.'
}

// In your files:
formatMessage({ id: 'someKey' }, { NUM_ADDS: 2 }); // "You and one other person added this."

formatMessage({ id: 'otherKey' }, { GENDER: 'male' }); // "He liked this."
```

### Optional ECMA Intl Support

While it is not the goal of this project, as stated above (in `Motivation #1`), the `messageformat` package which was introduced as the dependent library in v2, has optional support for browser ECMAScript Intl or via it's polyfills.

As such, you can optionally turn on Intl API support by dispatching or setting `ecmaSupport` value in the reducer to `true`. You'll need the corresponding polyfill if you want cross browser version support.

For more information about the extended support, check out the [messageformat documentation](https://messageformat.github.io/guide/)

```js
store.dispatch(updateIntl({
  ecmaSupport: true
}));
```

## Available Methods

### Provide `locale` and `messages` onload

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
import { updateIntl } from 'redux-intl-connect';

store.dispatch(updateIntl({
  locale,
  messages,
}));
```

The most common scenario would be having an API call to fetch translations from a server before `updateIntl` is being dispatched. A possible example with `redux-thunk` would be:

```js
import { updateIntl } from 'redux-intl-connect';

// The redux action
const getAndUpdateIntl = (locale) => (dispatch) => {
  fetch('url-to-messages')
    .then((response) => response.text())
    .then((body) => {
        dispatch(updateIntl({
          locale,
          messages: body
        }))
    });
}

// Somewhere in the app
getAndUpdateIntl('en_us');
```

## Specific Implementations

-   [redux-intl-react](https://github.com/yeojz/redux-intl-react)

## License

`redux-intl-connect` is [BSD licensed](./LICENSE)

## Acknowledgement

Referenced from the following libraries:

-   [react-intl](https://github.com/yahoo/react-intl)
-   [react-intl-redux](https://github.com/ratson/react-intl-redux)

ICU Message Syntax parsing is provided by the [messageformat](https://github.com/messageformat/messageformat.js) package.

[npm-badge]: https://img.shields.io/npm/v/redux-intl-connect.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/redux-intl-connect

[build-badge]: https://img.shields.io/travis/yeojz/redux-intl-connect/master.svg?style=flat-square
[build-link]: https://travis-ci.org/yeojz/redux-intl-connect

[coveralls-badge]: https://img.shields.io/coveralls/yeojz/redux-intl-connect.svg?style=flat-square
[coveralls-link]: https://coveralls.io/github/yeojz/redux-intl-connect

[pr-welcome-badge]: https://img.shields.io/badge/PRs-Welcome-ff69b4.svg?style=flat-square
[pr-welcome-link]: https://github.com/yeojz/redux-intl-connect/blob/master/CONTRIBUTING.md
