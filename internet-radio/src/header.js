import React from 'react';
import './index.css';



const Header = ({title})=> {
  return (
    <div className="header-row">
      <div className="header-title"> {title} </div>
    </div>
  )
}

export default Header;
