import {expect} from 'chai';

import {UPDATE_ACTION} from '../src/constants';
import updateIntl from '../src/updateIntl';

describe('updateIntl', function (){

  it('creates an update action', function (){
    const result = updateIntl(getUpdatePayload());
    const expected = {
      type: UPDATE_ACTION,
      payload: getUpdatePayload()
    };

    expect(result).be.deep.equal(expected);
  });

  it('omits non supported payload keys', function () {
    const result = updateIntl({
      some: 'random key'
    });
    const expected = {
      type: UPDATE_ACTION,
      payload: {}
    };

    expect(result).to.deep.equal(expected);
    expect(result.payload.some).to.be.undefined;
  });

  it('returns UPDATE_ACTION as type', function () {
    updateIntl.__Rewire__('UPDATE_ACTION', 'TEMP');

    const result = updateIntl();

    expect(result.type).to.equal('TEMP');

    updateIntl.__ResetDependency__('UPDATE_ACTION');
  });

  it('returns payload from acceptable keys', function () {
    updateIntl.__Rewire__('ACCEPTABLE_KEYS', ['test']);

    const result = updateIntl({
      test: 'here'
    });

    const expected = {
      type: UPDATE_ACTION,
      payload: {test: 'here'}
    };

    expect(result).to.deep.equal(expected);

    updateIntl.__ResetDependency__('ACCEPTABLE_KEYS');
  });

  function getUpdatePayload() {
    return {
        locale: 'it',
        messages: {
          a: "b"
        },
        ecmaSupport: true
    };
  }
});
