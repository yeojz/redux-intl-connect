import createHelpers from './createHelpers';

const defaultSelector = (state) => {
  return state.intl;
}

function createMapStateToProps(intlSelector = defaultSelector) {
  return (state) => {
    const intl = intlSelector(state);

    return {
      intl: createHelpers(intl),
      key: intl.locale
    };
  };
}

export default createMapStateToProps;
