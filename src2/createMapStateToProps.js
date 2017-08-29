import createIntlObject from './createIntlObject';

function createMapStateToProps(defaultSelector) {
  function mapStateToProps(state, ownProps = {}) {
    const selector = ownProps.intlSelector || defaultSelector;
    const intl = selector(state);

    return {
      intl: createIntlObject(intl),
      key: intl.locale,
    };
  }

  return mapStateToProps;
}

export default createMapStateToProps;
