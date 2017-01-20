import invariant from 'invariant';
import {LOG_PREFIX} from './constants';
import createMapStateToProps from './createMapStateToProps';

export function injectIntl(
  connect,
  mapStateToProps = createMapStateToProps()
) {
  if (!connect) {
    invariant(false, `${LOG_PREFIX} missing argument 1: "connect" in injectIntl`);
    return () => null;
  }

  return (Component) => (
    connect(mapStateToProps)(Component)
  );
}

export default injectIntl;
