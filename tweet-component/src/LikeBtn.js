import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const LikeBtn = ({likes}) => {
  return (<span className="like-btn">
    <i className="fa fa-heart"></i>{likes}
  </span>)
}

export default LikeBtn;
