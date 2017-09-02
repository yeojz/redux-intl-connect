import React from 'react';
import PropTypes from 'prop-types';

const contextTypes = {
  intl: PropTypes.object.isRequired
}

function injectIntl(Component) {
  const InjectedIntl = (props, context) => (
    <Component
      {...props}
      intl={context.intl}
    />
  );

  InjectedIntl.contextTypes = contextTypes;
  return InjectedIntl;
}

export default injectIntl;
