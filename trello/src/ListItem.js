import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './index.css';


const ListItem = ({items, id})=> {
  return (
    <div>
      {items.map(item => <div className="list-item"> {item} </div>)}

  </div>
  )
}



export default ListItem;
