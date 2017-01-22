import React from 'react';
import Showcase from './Showcase';
import Header from '../project/Header';
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

    <div className='app-content'>
      <div className='sm-col-12 md-col-10 lg-col-8 mx-auto'>
        <h2 className='tagline'>Internationalize your <strong className='word-highlight-black'>Redux</strong> web apps with familar APIs.</h2>
        <Showcase />
      </div>
    </div>
    <footer className='app-footer'>
      &copy; {year} Gerald Yeo. <a href='https://github.com/yeojz/redux-intl-connect/blob/master/LICENSE'>BSD-licensed</a>
    </footer>
  </div>
);

export default App;
