import {expect} from 'chai';
import {stub} from 'sinon';
import MessageFormat from 'messageformat';
import formatMessage from '../src/formatMessage';

describe('formatMessage', function () {

  it('returns a function', function () {
    const result = formatMessage();
    expect(result).to.be.a.function;
  });

  it('returns empty string when no locale is detected', function () {
    const result = formatMessage({})({
      id: 'test',
    });

    expect(result).to.equal('');
  });

  it('returns message from id', function () {
    const state = getState();
    const result = formatMessage(state)({
      id: 'test'
    });

    expect(result).to.equal('let us test');
  });

  it('returns message from id with values replaced', function () {
    const state = getState();
    const result = formatMessage(state)({
      id: 'testvar'
    }, {
      s: 'something'
    });

    expect(result).to.equal('let us replace something');
  });

  it('returns default message when id not found', function () {
    const state = getState();
    const result = formatMessage(state)({
      id: 'test-nothing',
      defaultMessage: 'it is missing'
    });

    expect(result).to.equal('it is missing');
  });

  it('throws error when missing id and defaultMessage', function () {
    const state = getState();
    const result = () => formatMessage(state)({
      id: 'test-nothing'
    });

    expect(result).to.throw(Error);
  });

  it('throws error when unexpected messageDescriptor', function () {
    const state = getState();
    const result = () => formatMessage(state)(null);
    expect(result).to.throw(Error);

    const result2 = () => formatMessage(state)(void 0);
    expect(result2).to.throw(Error);
  });


  it('returns message directly (ENV:production, values empty)', function () {
    const values = rewireEnv();
    const state = getState();
    const result = formatMessage(state)({
      id: 'test'
    });

    testResult(result, values, 'let us test');
    resetEnv();
  });

  it('returns defaultMessage directly (ENV:production, values empty)', function () {
    const values = rewireEnv();
    const state = getState();
    const result = formatMessage(state)({
      id: 'test-nothing',
      defaultMessage: 'it is missing'
    });

    testResult(result, values, 'it is missing');
    resetEnv();
  });

  it('returns id directly (ENV:production, values empty)', function () {
    const values = rewireEnv();
    const state = getState();
    const result = formatMessage(state)({
      id: 'test-nothing',
    });

    testResult(result, values, 'test-nothing');
    resetEnv();
  });

  it('returns id when invariant is disabled with no message/defaultMessage', function () {
    const state = getState();
    const invariant = stub();
    formatMessage.__Rewire__('invariant', invariant);

    const result = formatMessage(state)({
      id: 'test-nothing',
    });
    expect(result).to.equal('test-nothing');
    expect(invariant.called).to.be.true;
    formatMessage.__ResetDependency__('invariant');
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
      template: stub()
    }
    formatMessage.__Rewire__('ENV', 'production');
    formatMessage.__Rewire__('invariant', values.invariant);
    formatMessage.__Rewire__('template', values.template);
    return values;
  }

  function resetEnv() {
    formatMessage.__ResetDependency__('ENV');
    formatMessage.__ResetDependency__('invariant');
    formatMessage.__ResetDependency__('template');
  }

  function testResult(result, values, str) {
    expect(result).to.equal(str);
    expect(values.invariant.called).to.be.false;
    expect(values.template.called).to.be.false;
  }
});
