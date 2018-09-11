import React from 'react';
import ReactDOM from 'react-dom';
import Time from './Time'
import './index.css';

const NameHandle = ({userHandle}) => {
  return (<div className="user-handle-div">
    <h4 className="user-handle">{userHandle}</h4>
    *
    <div className="time-div">
      <Time/>
    </div>
  </div>)
}

export default NameHandle;
