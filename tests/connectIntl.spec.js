import {expect} from 'chai';
import {stub} from 'sinon';
import connectIntl from '../src/connectIntl';

describe('connectIntl', function () {
  it('throws error when connect is not defined', function () {
    const result = () => connectIntl();
    expect(result).to.throw(Error);
  });

  it('returns nested functions', function () {
    const result = connectIntl(() => null);
    expect(result).to.be.a.function;
    expect(result()).to.be.a.function;
  });

  it('calls connect on component', function () {
    const injector = stub();
    const connect = stub().returns(injector);

    connectIntl(connect)('test')('Component');

    expect(connect.called).to.be.true;
    expect(connect.calledWith('test')).to.be.true;
    expect(injector.calledWith('Component')).to.be.true;
  });

  it('returns noop when invariant is disabled', function () {
    const invariant = stub();
    connectIntl.__Rewire__('invariant', invariant);

    const result = connectIntl();

    expect(result).to.be.a.function;
    expect(result()).to.be.null;
    expect(invariant.called).to.be.true;

    connectIntl.__ResetDependency__('invariant');
  });

  it('call injectIntl', function () {
    const injectIntl = stub();
    const connect = stub();
    const mapStateToProps = stub();
    connectIntl.__Rewire__('injectIntl', injectIntl);

    const result = connectIntl(connect, mapStateToProps);
    expect(result).to.be.a.function;
    expect(injectIntl.calledWith(connect, mapStateToProps)).to.be.true;

    connectIntl.__ResetDependency__('injectIntl');
  });
});
