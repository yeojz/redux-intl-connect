import {expect} from 'chai';

import {UPDATE_ACTION} from '../src/constants';
import updateIntl from '../src/updateIntl';

describe('updateIntl', function(){

  it('creates an update action', function(){
    const result = updateIntl(getUpdatePayload());
    const expected = {
      type: UPDATE_ACTION,
      payload: getUpdatePayload()
    };

    expect(result).be.deep.equal(expected);
  });

  function getUpdatePayload() {
    return {
        locale: 'it',
        messages: {
          a: "b"
        },
        pattern: /a-z/
    };
  }
});
