import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Poster = ({image, title, text})=>{
  return (
    <div className="container">
      <img src={image}/>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}


ReactDOM.render(<Poster image="working-during-vacations.jpg" title="Dev Life" text="Working while at the beach"/>, document.querySelector("#root"))
