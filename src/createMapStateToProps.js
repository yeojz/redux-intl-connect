import get from 'lodash/get';
import getValue from './utils/getValue';
import createIntlObject from './createIntlObject';
import intlSelector from './intlSelector';

function createMapStateToProps(selector = intlSelector) {
  return (state) => {
    const intl = selector(get(state, 'intl'));

    return {
      intl: createIntlObject(intl),
      key: getValue(intl, 'locale')
    }
  };
}

export default createMapStateToProps;
