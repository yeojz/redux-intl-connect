import get from 'lodash/get';
import isImmutable from './isImmutable';

function getValue(state, value) {
  if (isImmutable(state)) {
    return state.get(value);
  }
  return get(state, value);
}

export default getValue;
