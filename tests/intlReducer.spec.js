import {expect} from 'chai';
import {UPDATE_ACTION} from '../src/constants';
import intlReducer, {initialState} from '../src/intlReducer';

describe('intlReducer', function() {
  it('starts with initial state', function() {
    const result = intlReducer(undefined, {});
    expect(result).be.deep.equal(initialState());
  });

  it('updates state', function() {
    const action = {
      type: UPDATE_ACTION,
      payload: getUpdatePayload()
    }
    const expected = getUpdatePayload()
    const result = intlReducer(undefined, action);
    expect(result).to.deep.eql(expected);
  });

  function getUpdatePayload() {
    return {
      locale: 'it',
      messages: {
        a: 'b'
      },
      pattern: /a-z/
    };
  }
});
