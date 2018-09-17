import React from 'react';
import Navbar from './Navbar'
import './index.css';


const Logo = ({logo})=> {
  return (
    <div className="logo"> <img src={logo} className="logoImg" alt="AE Logo"/>
</div>
  )
}


const Header = ({headerImg})=> {
  return (
    <div className="header-container">
      <Logo logo={headerImg}/>
      <div className="header-title">Aviation Explorer</div>
      <Navbar/>
    </div>
  )
}

export default Header;
