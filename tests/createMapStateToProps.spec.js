import {expect} from 'chai';
import {stub} from 'sinon';
import createMapStateToProps, {defaultSelector} from '../src/createMapStateToProps';

describe('createMapStateToProps', function () {

  it('returns a function', function () {
    const result = createMapStateToProps();
    expect(result).to.be.a.function;
  });

  it('returns prop object', function () {
    const selector = stub().returns({
      locale: 'it'
    });
    const result = createMapStateToProps(selector)('object');

    expect(selector.calledWith('object')).to.be.true;
    expect(result.intl).to.be.an.object;
    expect(result.key).to.equal('it');
  });

  it('calls createHelpers with intl values', function () {
    const createHelpers = stub();
    createMapStateToProps.__Rewire__('createHelpers', createHelpers);

    createMapStateToProps()({intl: 'test'});
    expect(createHelpers.calledWith('test')).to.be.true;

    createMapStateToProps.__ResetDependency__('createHelpers');
  });

  it('returns intl key in state', function () {
    const result = defaultSelector({intl: 'test'});
    expect(result).to.equal('test');
  })
});
