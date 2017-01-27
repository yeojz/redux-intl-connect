import React from 'react';
import Header from '../project/Header';
import Hero from './section/Hero';
import './App.css';

const links = [
  {
    href: '//github.com/yeojz/redux-intl-connect',
    text: 'github'
  },
  {
    href: '//npmjs.com/package/redux-intl-connect',
    text: 'npm'
  }
]

const year = new Date().getUTCFullYear();

const App = () => (
  <div className='app'>
    <Header links={links}/>

    <div className='app-content sm-col-10 md-col-8 mx-auto'>
      <Hero />
    </div>
    <footer className='app-footer'>
      &copy; {year} Gerald Yeo. <a href='https://github.com/yeojz/redux-intl-connect/blob/master/LICENSE'>BSD-licensed</a>
    </footer>
  </div>
);

export default App;
