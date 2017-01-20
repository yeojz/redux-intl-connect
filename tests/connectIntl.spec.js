import {expect} from 'chai';
import {stub} from 'sinon';
import connectIntl from '../src/connectIntl';

describe('connectIntl', function() {
  it('throws error when connect is not defined', function() {
    const result = () => connectIntl();
    expect(result).to.throw(Error);
  });

  it('returns nested functions', function() {
    const result = connectIntl(() => null);
    expect(result).to.be.a.function;
    expect(result()).to.be.a.function;
  });

  it('calls connect on component', function() {
    const injector = stub();
    const connect = stub().returns(injector);

    connectIntl(connect)()('Component');

    expect(connect.called).to.be.true;
    expect(injector.calledWith('Component')).to.be.true;
  });
});
