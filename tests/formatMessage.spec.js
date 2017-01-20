import {expect} from 'chai';
import formatMessage from '../src/formatMessage';

describe('formatMessage', function() {

  it('returns a function', function() {
    const result = formatMessage();
    expect(result).to.be.a.function;
  });

  it('returns message from id', function() {
    const state = getState();
    const result = formatMessage(state)({
      id: 'test'
    });

    expect(result).to.equal('let us test');
  });

  it('returns message from id with values replaced', function() {
    const state = getState();
    const result = formatMessage(state)({
      id: 'testvar'
    }, {
      s: 'something'
    });

    expect(result).to.equal('let us replace something');
  });

  it('returns default message when id not found', function() {
    const result = formatMessage({})({
      id: 'test',
      defaultMessage: 'it is missing'
    });

    expect(result).to.equal('it is missing');
  });

  it('returns default message from id with values replaced', function() {
    const result = formatMessage({})({
      id: 'test',
      defaultMessage: 'it is missing {s}'
    }, {
      s: 'something'
    });

    expect(result).to.equal('it is missing something');
  });

  it('throws error when missing id and defaultMessage', function() {
    const result = () => formatMessage({})({
      id: 'test'
    });

    expect(result).to.throw(Error);
  });

  function getState() {
    return {
      locale: 'en',
      messages: {
        test: 'let us test',
        testvar: 'let us replace {s}'
      }
    };
  }
});
