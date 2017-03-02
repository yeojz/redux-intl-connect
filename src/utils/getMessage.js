import get from 'lodash/get';
import isImmutable from './isImmutable';

function getMessage(intl, id) {
  if (isImmutable(intl)) {
    return intl.getIn(['messages', id], '');
  }
  return get(intl, ['messages', id], '');
}

export default getMessage;
