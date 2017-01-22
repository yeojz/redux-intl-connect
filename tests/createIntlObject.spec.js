import {expect} from 'chai';
import createIntlObject from '../src/createIntlObject';

describe('createIntlObject', function () {
  let intlObject;

  beforeEach(function () {
    intlObject = createIntlObject({locale: 'it'});
  });

  it('is a function', function () {
    expect(createIntlObject).to.be.a.function;
  });

  it('total number of exports', function () {
    expect(Object.keys(intlObject)).to.be.length(2)
  });

  it('contains formatMessage', function () {
    expect(intlObject.formatMessage).to.be.a.function;
  });

  it('contains getLocale', function () {
    expect(intlObject.locale).to.equal('it');
  });
});
