import isFunction from 'lodash/isFunction';

function isImmutable(intl) {
  return intl && isFunction(intl.toJS);
}

export default isImmutable;
