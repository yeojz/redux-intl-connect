import invariant from 'invariant';
import {LOG_NAME} from './constants';
import injectIntl from './injectIntl';
import createMapStateToProps from './createMapStateToProps';

function connectIntl(
  connect,
  mapStateToProps = createMapStateToProps()
) {
  if (!connect) {
    invariant(false, `${LOG_NAME} missing argument 1: "connect" in connectIntl`);
    return () => null;
  }

  const injector = injectIntl(connect, mapStateToProps);

  return (...args) => (Component) => (
    connect(...args)(injector(Component))
  );
}

export default connectIntl;
