import {expect} from 'chai';
import {fromJS} from 'immutable';
import {UPDATE_ACTION} from '../src/constants';
import intlReducer, {initialState} from '../src/intlReducer';

describe('intlReducer', function () {

  it('starts with initial state', function () {
    const result = intlReducer(void 0, {});
    expect(result).be.deep.equal(initialState());
  });

  it('returns state when unexpected action is given', function () {
    const result = intlReducer(initialState(), null);
    expect(result).to.deep.equal(initialState());

    const result2 = intlReducer(initialState(), void 0);
    expect(result2).to.deep.equal(initialState());
  });

  it('updates state', function () {
    const action = {
      type: UPDATE_ACTION,
      payload: getUpdatePayload()
    }
    const expected = getUpdatePayload()
    const result = intlReducer(void 0, action);
    expect(result).to.deep.eql(expected);
  });

  it('updates state even if immutable', function () {
    const action = {
      type: UPDATE_ACTION,
      payload: getUpdatePayload()
    }
    const expected = fromJS(getUpdatePayload());
    const result = intlReducer(fromJS(initialState()), action);
    expect(result.toJS()).to.deep.equal(expected.toJS());
  });

  function getUpdatePayload() {
    return {
      cacheDisable: false,
      ecmaSupport: false,
      locale: 'it',
      messages: {
        a: 'b'
      }
    };
  }
});
