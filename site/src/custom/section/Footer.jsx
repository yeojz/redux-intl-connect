import React from 'react';
import './Footer.css';

const year = new Date().getUTCFullYear();

const badges = [
  {
    alt: 'npm',
    badge: 'https://img.shields.io/npm/v/redux-intl-connect.svg?style=flat-square',
    href: 'https://www.npmjs.com/package/redux-intl-connect'
  },
  {
    alt: 'travis-ci',
    badge: 'https://img.shields.io/travis/yeojz/redux-intl-connect.svg?style=flat-square',
    href: 'https://travis-ci.org/yeojz/redux-intl-connect'
  },
  {
    alt: 'coveralls',
    badge: 'https://img.shields.io/coveralls/yeojz/redux-intl-connect.svg?style=flat-square',
    href: 'https://coveralls.io/github/yeojz/redux-intl-connect'
  },
  {
    alt: 'pull-request',
    badge: 'https://img.shields.io/badge/PRs-Welcome-ff69b4.svg?style=flat-square',
    href: 'https://github.com/yeojz/redux-intl-connect/blob/master/CONTRIBUTING.md'
  }
]

const getBadges = () => {
  return badges.map((link, idx) => (
    <a
      className='inline-block m0 mr2'
      href={link.href}
      key={idx}>
      <img src={link.badge} alt={link.alt} />
    </a>
  ));
}

const Footer = () => (
  <footer className="section-footer clearfix pb3 pt3 mt1">
    <div className="container sm-col-10 md-col-8 mx-auto">
      <p>
        {getBadges()}
      </p>
      <p className='h5'>
        &copy; {year} Gerald Yeo. <a href='https://github.com/yeojz/redux-intl-connect/blob/master/LICENSE'>BSD-licensed</a>
      </p>
    </div>
  </footer>
);

export default Footer;
