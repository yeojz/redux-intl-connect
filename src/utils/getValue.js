import get from 'lodash/get';
import isImmutable from './isImmutable';

function getValue(intl, value) {
  if (isImmutable(intl)) {
    return intl.get(value);
  }
  return get(intl, value);
}

export default getValue;
