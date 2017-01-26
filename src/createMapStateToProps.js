import createIntlObject from './createIntlObject';
import intlSelector from './intlSelector';

export function createMapStateToProps(selector = intlSelector) {
  return (state) => {
    const intl = selector(state);

    return {
      intl: createIntlObject(intl),
      key: intl.locale
    };
  };
}

export default createMapStateToProps;
