import {expect} from 'chai';
import createHelpers from '../src/createHelpers';

describe('createHelpers', function () {
  let helpers;

  beforeEach(function () {
    helpers = createHelpers({});
  });

  it('is a function', function () {
    expect(createHelpers).to.be.a.function;
  });

  it('total number of exports', function () {
    expect(Object.keys(helpers)).to.be.length(2)
  });

  it('contains formatMessage', function () {
    expect(helpers.formatMessage).to.be.a.function;
  });

  it('contains getLocale', function () {
    expect(helpers.getLocale).to.be.a.function;
  });

  it('returns the locale key of object', function () {
    helpers = createHelpers({locale: 'it'});
    expect(helpers.getLocale()).to.equal('it');
  });
});
