import React, {PropTypes} from 'react';
import Logo from './Logo';
import './Header.css';

const propTypes = {
  links: PropTypes.array
};

const renderLinks = (links) => {
  if (!links || links.length < 1) {
    return null;
  }
  const elements = links.map((link, idx) => (
    <li key={idx}>
      <a href={link.href}>{link.text}</a>
    </li>
  ));
  return <ul className='project-header-links'>{elements}</ul>;
};

const Header = (props) => (
  <div className='project-header'>
    <div className='sm-col-12 md-col-10 mx-auto'>
      <Logo />
      {renderLinks(props.links)}
    </div>
  </div>
)

Header.propTypes = propTypes;
export default Header;
