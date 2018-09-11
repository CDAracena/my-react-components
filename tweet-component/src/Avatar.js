import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Avatar({img}) {
  return (<div className="image-div"><img src={img} alt="avatar-user" className="user-avatar-img"/></div>)
}

export default Avatar;
