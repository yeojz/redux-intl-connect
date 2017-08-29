import invariant from 'invariant';
import injectIntl from './injectIntl';

function connectIntl(connect, intlSelector) {
  invariant(
    connect,
    'Missing argument 1: "connect" in connectIntl'
  );

  if (!connect) {
    return () => null;
  }

  const withIntl = injectIntl(connect, intlSelector);

  return (...args) => (Component) => {
    connect(...args)(withIntl(Component))
  };
}

export default connectIntl;
