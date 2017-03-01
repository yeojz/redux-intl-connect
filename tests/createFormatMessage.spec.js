import {expect} from 'chai';
import {stub} from 'sinon';
import {fromJS} from 'immutable';
import MessageFormat from 'messageformat';
import createFormatMessage from '../src/createFormatMessage';

describe('createFormatMessage', function () {

  it('returns a function', function () {
    const result = createFormatMessage();
    expect(result).to.be.a.function;
  });

  it('returns empty string when no locale is detected', function () {
    const result = createFormatMessage({})({
      id: 'test',
    });

    expect(result).to.equal('');
  });

  it('returns message from id', function () {
    const state = getState();
    const result = createFormatMessage(state)({
      id: 'test'
    });

    expect(result).to.equal('let us test');
  });

  it('returns message from id with values replaced', function () {
    const state = getState();
    const result = createFormatMessage(state)({
      id: 'testvar'
    }, {
      s: 'something'
    });

    expect(result).to.equal('let us replace something');
  });

  it('returns default message when id not found', function () {
    const state = getState();
    const result = createFormatMessage(state)({
      id: 'test-nothing',
      defaultMessage: 'it is missing'
    });

    expect(result).to.equal('it is missing');
  });

  it('throws error when missing id and defaultMessage', function () {
    const state = getState();
    const result = () => createFormatMessage(state)({
      id: 'test-nothing'
    });

    expect(result).to.throw(Error);
  });

  it('throws error when unexpected messageDescriptor', function () {
    const state = getState();
    const result = () => createFormatMessage(state)(null);
    expect(result).to.throw(Error);

    const result2 = () => createFormatMessage(state)(void 0);
    expect(result2).to.throw(Error);
  });


  it('[production] returns message from id', function () {
    const values = rewireEnv();
    const state = getState();
    const result = createFormatMessage(state)({
      id: 'test'
    });

    testResult(result, values, 'let us test');
    resetEnv();
  });

  it('[production] returns defaultMessage directly when missing id', function () {
    const values = rewireEnv();
    const state = getState();
    const result = createFormatMessage(state)({
      id: 'test-nothing',
      defaultMessage: 'it is missing'
    });

    testResult(result, values, 'it is missing');
    resetEnv();
  });

  it('[production] returns id directly when missing id and no default message', function () {
    const values = rewireEnv();
    const state = getState();
    const result = createFormatMessage(state)({
      id: 'test-nothing',
    });

    testResult(result, values, 'test-nothing');
    resetEnv();
  });

  it('returns id when invariant is disabled with no message/defaultMessage', function () {
    const state = getState();
    const invariant = stub();

    createFormatMessage.__Rewire__('invariant', invariant);

    const result = createFormatMessage(state)({
      id: 'test-nothing',
    });

    expect(result).to.equal('test-nothing');
    expect(invariant.called).to.be.true;

    createFormatMessage.__ResetDependency__('invariant');
  });

  it('returns message from id even with immutable data source', function () {
    const state = fromJS(getState());
    const result = createFormatMessage(state)({
      id: 'test'
    });

    expect(result).to.equal('let us test');
  });

  function getState() {
    return {
      locale: 'en',
      messages: new MessageFormat('en').compile({
        test: 'let us test',
        testvar: 'let us replace {s}'
      })
    };
  }

  function rewireEnv() {
    const values = {
      invariant: stub(),
    }
    createFormatMessage.__Rewire__('ENV', 'production');
    createFormatMessage.__Rewire__('invariant', values.invariant);
    return values;
  }

  function resetEnv() {
    createFormatMessage.__ResetDependency__('ENV');
    createFormatMessage.__ResetDependency__('invariant');
  }

  function testResult(result, values, str) {
    expect(result).to.equal(str);
    expect(values.invariant.called).to.be.false;
  }
});
