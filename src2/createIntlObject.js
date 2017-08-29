import createFormatMessage from './createFormatMessage';

function createIntlObject(intl) {
  return {
    formatMessage: createFormatMessage(intl),
    locale: intl.locale
  }
}

export default createIntlObject;
