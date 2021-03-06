import {expect} from 'chai';
import {stub} from 'sinon';
import injectIntl from '../src/injectIntl';

describe('injectIntl', function () {

  it('throws error when connect is not defined (invariant)', function () {
    const result = () => injectIntl();
    expect(result).to.throw(Error);
  });

  it('returns noop when invariant is disabled', function () {
    const invariant = stub();
    injectIntl.__Rewire__('invariant', invariant);

    const result = injectIntl();

    expect(result).to.be.a.function;
    expect(result()).to.be.null;
    expect(invariant.called).to.be.true;

    injectIntl.__ResetDependency__('invariant');
  });

  it('returns a function', function () {
    const result = injectIntl(() => null);
    expect(result).to.be.a.function;
  });

  it('calls connect on component', function () {
    const connected = stub();
    const connect = stub().returns(connected);

    injectIntl(connect, 'mapStateToProps')('Component');

    expect(connect.called).to.be.true;
    expect(connect.calledWith('mapStateToProps')).to.be.true;
    expect(connected.called).to.be.true;
    expect(connected.calledWith('Component')).to.be.true;
  });
});
