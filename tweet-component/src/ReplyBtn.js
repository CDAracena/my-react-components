import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const ReplyBtn = ({replies}) => {
  return (<span className="reply-btn">
    <i className="fa fa-reply"></i>{replies}
  </span>)
}

export default ReplyBtn;
