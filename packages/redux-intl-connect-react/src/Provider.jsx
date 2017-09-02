import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import IntlProvider from './IntlProvider';

const propTypes = {
  children: PropTypes.any,
  store: PropTypes.object
}

function Provider(props) {
  const { children, ...rest } = props;

  return (
    <ReduxProvider { ...rest }>
      <IntlProvider>
        {children}
      </IntlProvider>
    </ReduxProvider>
  )
}

Provider.propTypes = propTypes
export default Provider;
