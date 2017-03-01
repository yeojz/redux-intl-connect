import {expect} from 'chai';
import {fromJS} from 'immutable';
import mockMessageFormat from './mocks/messageformat';
import defaultIntlSelector, {createIntlSelector} from '../src/intlSelector';

describe('intlSelector', function () {

  it('calls MessageFormat with proper variables', function () {
    defaultIntlSelector.__Rewire__('MessageFormat', mockMessageFormat);

    const intlSelector = createIntlSelector();
    const state = getState();
    const result = intlSelector(state);

    expect(result.locale).to.equal(state.locale);
    expect(result.messages.test).to.be.a.function;
    expect(result.messages.test()).to.equal('test-message');

    defaultIntlSelector.__ResetDependency__('MessageFormat');
  });

  it('returns empty object when intl object is undefined', function () {
    const intlSelector = createIntlSelector();
    const result = intlSelector(void 0);
    expect(result).to.be.empty;
  });

  it('returns empty object when intl object is null', function () {
    const intlSelector = createIntlSelector();
    const result = intlSelector(null);
    expect(result).to.be.empty;
  });

  it('returns cache when cache locale and reducer locale is the same.', function () {
    const intlSelector = createIntlSelector();

    const round1 = intlSelector(getState());
    expect(round1.messages.test).to.not.be.undefined;
    expect(round1.messages.alternate).to.be.undefined;

    const round2 = intlSelector(getAlternateState());
    expect(round2.messages.test).to.not.be.undefined;
    expect(round2.messages.alternate).to.be.undefined;
  });

  it('[immutable] calls MessageFormat with proper variables', function () {
    defaultIntlSelector.__Rewire__('MessageFormat', mockMessageFormat);

    const intlSelector = createIntlSelector();
    const state = getState();
    const result = intlSelector(fromJS(state));

    expect(result.locale).to.equal(state.locale);
    expect(result.messages.test).to.be.a.function;
    expect(result.messages.test()).to.equal('test-message');

    defaultIntlSelector.__ResetDependency__('MessageFormat');
  });

  it('[immutable] returns empty object when unable to locale intl', function () {
    const intlSelector = createIntlSelector();
    const result = intlSelector({
      intl: fromJS({})
    });
    expect(result).to.be.empty;
  });

  it('[immutable] returns cache when cache locale and reducer locale is the same', function () {
    const intlSelector = createIntlSelector();

    let state1 = getState();
    state1.intl = fromJS(state1);
    const round1 = intlSelector(state1);
    expect(round1.messages.test).to.not.be.undefined;
    expect(round1.messages.alternate).to.be.undefined;

    let state2 = getAlternateState();
    state2.intl = fromJS(state2);
    const round2 = intlSelector(state2);
    expect(round2.messages.test).to.not.be.undefined;
    expect(round2.messages.alternate).to.be.undefined;
  });

  function getState() {
    return {
      cacheDisable: false,
      locale: 'en',
      messages: {
        test: 'let us test',
        testvar: 'let us replace {s}'
      }
    };
  }

  function getAlternateState() {
    return {
      cacheDisable: false,
      locale: 'en',
      message: {
        alternate: 'give us alternatives'
      }
    }
  }
});
