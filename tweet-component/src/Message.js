import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Message({messageText}) {
  return (<div className="message-div">
    <p>{messageText}</p>
  </div>)
}

export default Message;
