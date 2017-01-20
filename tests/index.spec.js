import {expect} from 'chai';
import * as exposed from '../src/index';

describe('index', function() {
  it('total number of exports', function() {
    expect(Object.keys(exposed)).to.be.length(4)
  });

  it('exports connectIntl', function() {
    expect(exposed.connectIntl).to.not.be.undefined;
  });

  it('exports injectIntl', function() {
    expect(exposed.injectIntl).to.not.be.undefined;
  });

  it('exports intlReducer', function() {
    expect(exposed.intlReducer).to.not.be.undefined;
  });

  it('exports updateIntl', function() {
    expect(exposed.updateIntl).to.not.be.undefined;
  });
});
