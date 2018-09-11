import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const RetweetBtn = ({retweets}) => {
  return (<span className="retweet-btn">
    <i className="fa fa-retweet"></i>{retweets}
  </span>)
}
export default RetweetBtn;
