import invariant from 'invariant';
import createMapStateToProps from './createMapStateToProps';
import defaultSelector from './intlSelector';

function injectIntl(connect, intlSelector = defaultSelector) {

  invariant(
    connect,
    'Missing argument 1: "connect" in injectIntl'
  );

  if (!connect) {
    return () => null;
  }

  const mapStateToProps = createMapStateToProps(intlSelector);
  return (Component) => connect(mapStateToProps)(Component);
}

export default injectIntl;

