import React from 'react';
import './index.css';

const PinterestItem = ({title, genre, mainImg})=> {
  return (
    <div className="pinterest-column">
      <div className="pin-title">{title}</div>
      <div className="genre">{genre}</div>
      <div className="main-Img-container"> <img src={mainImg} className="main-img"/> </div>
      <div className="follow-btn"> Follow </div>
     </div>
  )
}

export default PinterestItem;
