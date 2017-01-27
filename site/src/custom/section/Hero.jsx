import React from 'react';
import HeroSnippet from './HeroSnippet';

import './Hero.css';

const Hero = () => (
  <div className='app-section section-hero'>
    <div className='clearfix'>
      <div className='sm-col sm-col-12 px2'>
        <h2 className='tagline'>Internationalize your <strong className='word-highlight-black'>Redux</strong> web apps easily.</h2>
      </div>
      <div className='sm-col sm-col-12 md-col-6 px2'>
        <div className='features clearfix'>
          <h3>Features</h3>
          <ul>
            <li className='sm-col md-col-6'>ICU message syntax</li>
            <li className='sm-col md-col-6'>ECMA Intl support</li>
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
