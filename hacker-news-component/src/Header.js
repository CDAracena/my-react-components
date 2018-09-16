import React from 'react';
import './index.css';
import Logo from './Logo'
import Nav from './Nav'
import 'font-awesome/css/font-awesome.min.css';

const Header = ({title}) => {
  return (
    <div className="header-container">
    <Logo logo="fa fa-y-combinator"/>
    <div className="logo-title">
      {title}</div>
    <div className="navbar-section">
      <Nav/>
    </div>
  </div>)

}

export default Header;
