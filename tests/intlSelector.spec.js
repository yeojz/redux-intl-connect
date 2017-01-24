import {expect} from 'chai';
import mockMessageFormat from './mocks/messageformat';
import intlSelector from '../src/intlSelector';

describe('intlSelector', function () {

  it('calls MessageFormat with proper variables', function () {
    intlSelector.__Rewire__('MessageFormat', mockMessageFormat);

    const state = getState();
    const result = intlSelector(state);

    expect(result.locale).to.equal(state.intl.locale);
    expect(result.messages.test).to.be.a.function;
    expect(result.messages.test()).to.equal('test-message');

    intlSelector.__ResetDependency__('MessageFormat');
  });

  it('returns empty object when unable to locale intl', function () {
    const result = intlSelector();
    expect(result).to.be.empty;
  })


  function getState() {
    return {
      intl: {
        locale: 'en',
        messages: {
          test: 'let us test',
          testvar: 'let us replace {s}'
        }
      }
    };
  }
});
