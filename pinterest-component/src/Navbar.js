import React from 'react';
import './index.css';


const NavItem = ({num, type})=> {
  return (
    <div className="navbar-item">
      <div className="num">{num}</div>
      <div className="navItem-type">{type}</div>
    </div>
  )
}
const Navbar = ()=> {
  return (
    <div className="navbar">
      <NavItem num={37} type="Boards"/>
      <NavItem num="8.9k" type="Pins"/>
      <NavItem num={186} type="Likes"/>
      <NavItem num="8.9k" type="Followers"/>
      <NavItem num="1.8k" type="Following"/>

    </div>

  )
}


export default Navbar;
