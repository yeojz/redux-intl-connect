# redux-intl-connect

> Redux connect-agnostic library providing i18n and ICU Message Syntax support (Ember, Preact, React etc)

[![Build Status][build-badge]][build-link]
[![Coverage Status][coveralls-badge]][coveralls-link]
[![npm package][npm-badge]][npm-link]
[![PRs Welcome][pr-welcome-badge]][pr-welcome-link]

## About

`redux-intl-connect` is a `connect` agnostic binding for internationalizing your application, with support for [ICU MessageFormat](http://userguide.icu-project.org/formatparse/messages).

As the library contains mainly higher-order functions, it is not restricted to just the commonly used `react-redux`. It easily used together with `ember-redux`, `preact-redux` and other redux bindings that provide the same `connect` interface.

## Packages

A few packages are published under this repository:

-   [redux-intl-connect](https://github.com/yeojz/tree/master/packages/redux-intl-connect)
-   [redux-intl-connect-react](https://github.com/yeojz/tree/master/packages/redux-intl-connect-react)
-   [redux-intl-connect-ember](https://github.com/yeojz/tree/master/packages/redux-intl-connect-ember)

## License

`redux-intl-connect` and it's sub-packages are [BSD licensed](./LICENSE)

[npm-badge]: https://img.shields.io/npm/v/redux-intl-connect.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/redux-intl-connect

[build-badge]: https://img.shields.io/travis/yeojz/redux-intl-connect/master.svg?style=flat-square
[build-link]: https://travis-ci.org/yeojz/redux-intl-connect

[coveralls-badge]: https://img.shields.io/coveralls/yeojz/redux-intl-connect.svg?style=flat-square
[coveralls-link]: https://coveralls.io/github/yeojz/redux-intl-connect

[pr-welcome-badge]: https://img.shields.io/badge/PRs-Welcome-ff69b4.svg?style=flat-square
[pr-welcome-link]: https://github.com/yeojz/redux-intl-connect/blob/master/CONTRIBUTING.md
