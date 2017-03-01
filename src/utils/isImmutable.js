import isFunction from 'lodash/isFunction';

function isImmutable(state) {
  return state && isFunction(state.toJS);
}

export default isImmutable;
