import {expect} from 'chai';
import {stub} from 'sinon';
import createMapStateToProps from '../src/createMapStateToProps';

describe('createMapStateToProps', function () {

  it('returns a function', function () {
    const result = createMapStateToProps();
    expect(result).to.be.a.function;
  });

  it('returns prop object', function () {
    const selector = stub().returns({
      locale: 'it'
    });
    const result = createMapStateToProps(selector)({intl: 'object'});

    expect(selector.calledWith('object')).to.be.true;
    expect(result.intl).to.be.an.object;
    expect(result.key).to.equal('it');
  });

  it('calls createIntlObject with intl values', function () {
    const createIntlObject = stub();
    createMapStateToProps.__Rewire__('createIntlObject', createIntlObject);
    createMapStateToProps.__Rewire__('intlSelector', () => 'test');

    createMapStateToProps()({intl: 'test'});
    expect(createIntlObject.calledWith('test')).to.be.true;

    createMapStateToProps.__ResetDependency__('createIntlObject');
    createMapStateToProps.__ResetDependency__('intlSelector');
  });
});
