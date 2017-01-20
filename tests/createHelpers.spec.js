import {expect} from 'chai';
import createHelpers from '../src/createHelpers';

describe('createHelpers', function() {
  let helpers;

  beforeEach(function() {
    helpers = createHelpers({});
  });

  it('is a function', function() {
    expect(createHelpers).to.be.a.function;
  });

  it('total number of exports', function() {
    expect(Object.keys(helpers)).to.be.length(1)
  });

  it('contains formatMessage', function() {
    expect(helpers.formatMessage).to.be.a.function;
  });
});
