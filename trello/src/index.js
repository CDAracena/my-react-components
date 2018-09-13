import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListItem from './ListItem'
import ListTitle from './ListTitle'

const Trello = ({list, id}) => {
  return (<div className="main-container">
    {
      list.map(listItem => <div className="container">
        <ListTitle itemTitle={listItem.title} key={id}/>
        <ListItem items={listItem.listarr} key={id}/>
        <div className="add-card">Add A Card... </div>
      </div>)
    }

  </div>)
}

const listsArray = [
  {
    title: 'Phone Features',
    listarr: ["Subwoofer", "Non-porous, washable", "Wings", "Beveled Bezel", "Seedless"]
  }, {
    title: 'Music Features',
    listarr: ["MegaAudio", "Fruity Loops", "AUX", "Bluetooth Support"]
  }, {
    title: 'Web Features',
    listarr: ["WiFi", "4G", "HotSpot", "Google Chrome"]
  }
]

ReactDOM.render(<Trello list={listsArray}/>, document.querySelector("#root"))
