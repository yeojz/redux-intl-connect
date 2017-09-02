import { connect as reduxConnect } from 'react-redux';
import injectIntl from './injectIntl';

function connect(...args) {
  return (Component) => reduxConnect(...args)(injectIntl(Component));
}

export default connect;
