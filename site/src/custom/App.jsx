import React from 'react';
import Logo from '../project/Logo';
import Hero from './section/Hero';
import Footer from './section/Footer';
import './App.css';

const App = () => (
  <div className='app'>
    <div className='app-logo sm-col-10 md-col-8 mx-auto'>
      <Logo />
    </div>
    <div className='app-content sm-col-10 md-col-8 mx-auto'>
      <Hero />
    </div>
    <Footer />
  </div>
);

export default App;
