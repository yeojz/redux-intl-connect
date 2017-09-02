# Usage Guide (React)

In this example, I'm going to use `react` / `react-redux` and also assume the messages object in reducer has the following messages:

```json
messages: {
  "myMessageKey": "Hello {name}"
}
```

**connect.js**

```js
import {connectIntl} from 'redux-intl-connect';
import {connect} from 'react-redux';

export default connectIntl(connect);
```

**Component.js**

```js
import React, {PropTypes} from 'react';
import connect from './connect';

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
