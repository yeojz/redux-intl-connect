import formatMessage from './formatMessage';

export default (intl) => ({
    formatMessage: formatMessage(intl),
    locale: intl.locale
});
