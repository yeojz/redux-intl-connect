import createHelpers from './createHelpers';

export const defaultSelector = (state) => {
  return state.intl;
}

export function createMapStateToProps(intlSelector = defaultSelector) {
  return (state) => {
    const intl = intlSelector(state);

    return {
      intl: createHelpers(intl),
      key: intl.locale
    };
  };
}

export default createMapStateToProps;
