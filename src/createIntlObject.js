import getValue from './utils/getValue';
import formatMessage from './formatMessage';

function createIntlObject(intl) {
  return {
    formatMessage: formatMessage(intl),
    locale: getValue(intl, 'locale')
  }
}

export default createIntlObject;
