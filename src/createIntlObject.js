import getValue from './utils/getValue';
import createFormatMessage from './createFormatMessage';

function createIntlObject(intl) {
  return {
    formatMessage: createFormatMessage(intl),
    locale: getValue(intl, 'locale')
  }
}

export default createIntlObject;
