import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  defaultMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  values: PropTypes.object
}

const contextTypes = {
  intl: PropTypes.object.isRequired,
}

const defaultProps = {
  className: '',
  defaultMessage: '',
  values: {}
}

function FormattedMessage(props, context) {
  const messageDescriptor = {
    id: props.id,
    defaultMessage: props.defaultMessage
  }
  const message = context.intl.formatMessage(messageDescriptor, props.values);
  return <span className={props.className}>{message}</span>;
}

FormattedMessage.propTypes = propTypes;
FormattedMessage.contextTypes = contextTypes;
FormattedMessage.defaultProps = defaultProps;

export default FormattedMessage;
