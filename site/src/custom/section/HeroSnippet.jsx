import React, {PropTypes} from 'react';
import {updateIntl} from 'redux-intl-connect';
import locale from '../../locale';
import connect from '../connect';

import './HeroSnippet.css';

const propTypes = {
  intl: PropTypes.object,
  updateIntl: PropTypes.func
};

const displayLanguage = (value) => (
  <input
    type="text"
    className="input"
    onChange={() => null}
    value={value}
  />
);

const handleChange = (updateIntl) => (evt) => {
  const {value} = evt.target;
  updateIntl(locale[value]);
}

const selectLanguage = (value, updateIntl) => (
  <select
    className='select'
    onChange={handleChange(updateIntl)}
    value={value}
    >
    <option value='en_US'>English (US)</option>
    <option value='zh_CN'>中文(简体)</option>
    <option value='ko_KR'>한국어</option>
    <option value='ja_JP'>日本語</option>
    <option value='es_LA'>Español</option>
    <option value='fr_FR'>Français (France)</option>
  </select>
);

const HeroSnippet = (props) => {
  const text = props.intl.formatMessage({id: 'intro'}, {name: 'hello'});
  const locale = props.intl.locale;

  return (
    <div className='app-section-sample section-hero-snippet border border-box rounded p3 app-snippet'>
      <span className='words'>Display</span>
      <span className='selector'>{displayLanguage(text)}</span>
      <span className='words'>in</span>
      <span className='selector'>{selectLanguage(locale, props.updateIntl)}</span>
      <span className='words'>or any other <strong className='word-highlight-white'>languages</strong></span>
    </div>
  );
}

HeroSnippet.propTypes = propTypes;

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  updateIntl
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroSnippet);
