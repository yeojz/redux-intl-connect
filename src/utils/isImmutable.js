import isFunction from 'lodash/isFunction';

function isImmutable(state = {}) {
  return isFunction(state.toJS);
}

export default isImmutable;
