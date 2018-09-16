import React from 'react';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';


const Logo = ({logo})=> {
  return (
    <div className="logo-div"><i className={logo}> </i> </div>
  )
}


export default Logo;
