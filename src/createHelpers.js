import formatMessage from './formatMessage';

const getLocale = (intl) => () => intl.locale;

export default (intl) => ({
    formatMessage: formatMessage(intl),
    getLocale: getLocale(intl)
});
