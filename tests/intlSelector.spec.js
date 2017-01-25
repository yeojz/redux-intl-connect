import {expect} from 'chai';
import mockMessageFormat from './mocks/messageformat';
import defaultIntlSelector, {createIntlSelector} from '../src/intlSelector';

describe('intlSelector', function () {

  it('calls MessageFormat with proper variables', function () {
    defaultIntlSelector.__Rewire__('MessageFormat', mockMessageFormat);

    const intlSelector = createIntlSelector();
    const state = getState();
    const result = intlSelector(state);

    expect(result.locale).to.equal(state.intl.locale);
    expect(result.messages.test).to.be.a.function;
    expect(result.messages.test()).to.equal('test-message');

    defaultIntlSelector.__ResetDependency__('MessageFormat');
  });

  it('returns empty object when unable to locale intl', function () {
    const intlSelector = createIntlSelector();
    const result = intlSelector();
    expect(result).to.be.empty;
  });

  it('returns cache when cache intl and reducer intl is the same.', function () {
    const intlSelector = createIntlSelector();

    const round1 = intlSelector(getState());
    expect(round1.messages.test).to.not.be.undefined;
    expect(round1.messages.alternate).to.be.undefined;

    const round2 = intlSelector(getAlternateState());
    expect(round2.messages.test).to.not.be.undefined;
    expect(round2.messages.alternate).to.be.undefined;
  });

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

  function getAlternateState() {
    return {
      intl: {
        locale: 'en',
        message: {
          alternate: 'give us alternatives'
        }
      }
    }
  }
});
