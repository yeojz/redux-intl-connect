import get from 'lodash/get';
import isImmutable from './isImmutable';

function getMessage(state, id) {
  if (isImmutable(state)) {
    return state.getIn(['messages', id], '');
  }
  return get(state, ['messages', id], '');
}

export default getMessage;
