import React from 'react';
import './index.css';


const ArticleOptions = ({comments}) => {
  return (
    <div className="options-div">
      <ul className="options-ul">
        <li> flag | </li>
        <li> hide | </li>
        <li> {comments} | </li>
        <li> instapaper | </li>
        <li> save to paper </li>

      </ul>
    </div>
  )
}

export default ArticleOptions;
