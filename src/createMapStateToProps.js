import createIntlObject from './createIntlObject';

export const defaultSelector = (state) => {
  return state.intl;
}

export function createMapStateToProps(intlSelector = defaultSelector) {
  return (state) => {
    const intl = intlSelector(state);

    return {
      intl: createIntlObject(intl),
      key: intl.locale
    };
  };
}

export default createMapStateToProps;
