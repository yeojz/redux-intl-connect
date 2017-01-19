import invariant from 'invariant';
import {LOG_NAME} from './constants';
import createMapStateToProps from './createMapStateToProps';

function injectIntl(
  connect,
  mapStateToProps = createMapStateToProps()
) {
  if (!connect) {
    invariant(false, `${LOG_NAME} missing argument 1: "connect" in injectIntl`);;
    return () => null;
  }

  return (Component) => (
    connect(mapStateToProps)(Component)
  );
}

export default injectIntl;
