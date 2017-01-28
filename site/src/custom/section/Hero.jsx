import React from 'react';
import HeroSnippet from './HeroSnippet';

import './Hero.css';

const Hero = () => (
  <div className='app-section section-hero pb4'>
    <div className='clearfix'>
      <div className='sm-col sm-col-12 px2'>
        <h2 className='tagline'><strong className='word-highlight-black'>Internationalize</strong> your Redux based web apps easily.</h2>
      </div>
      <div className='sm-col sm-col-12 md-col-6 px2'>
        <div className='features clearfix'>
          <h3>Features</h3>
          <ul className='pl3'>
            <li className='sm-col md-col-6 mb2 pr3'>ICU message syntax</li>
            <li className='sm-col md-col-6 mb2 pr3'>ECMA Intl support <strong>optional</strong></li>
            <li className='sm-col md-col-6 mb2 pr3'>Lightweight alternative for react-intl if ECMA Intl support is not needed</li>
          </ul>
        </div>
      </div>
      <div className='sm-col sm-col-12 md-col-6 px2'>
        <HeroSnippet />
      </div>
    </div>
  </div>
)

export default Hero
