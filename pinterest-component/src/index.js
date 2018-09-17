import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import PinterestItem from './PinterestItem'
import './index.css';


const Pinterest = () => {
  return (
    <div className="main-container">
      <Header headerImg="https://i.pinimg.com/280x280_RS/7b/eb/40/7beb401620fabf62dc1841484eb47844.jpg"/>
      <div className="body-container">
        <PinterestItem title="DIY-Tips Tricks Ideas" genre="Aviation Explorer" mainImg="http://cdn.shopify.com/s/files/1/0227/2953/files/Aviation-UnmarkedJet_resized02.jpg?11654799975116125852" alt="Alt-1"/>
        <PinterestItem title="AVIATION" genre="Aviation Explorer" mainImg="https://www.ainonline.com/sites/default/files/styles/ain30_fullwidth_large_2x/public/uploads/2018/01/d_g650_g_print_191.jpg?itok=mzvRdifO" alt="alt-2"/>
        <PinterestItem title="Exceptional Aviation" genre="Aviation Explorer" mainImg="https://airwaysmag.com/wp-content/uploads/2016/03/Boeing_747_landing_at_Barcelona_in_a_golden_sunset-680x365_c.jpg"/>
        <PinterestItem title="AEROSPACE" genre="Aviation Explorer" mainImg="http://www.trulyunbeleivable.com/wp-content/uploads/2018/03/Aviation.jpg"/>
        <PinterestItem title="When Flying Was Great" genre="Aviation Explorer" mainImg="https://www.dassault-aviation.com/wp-content/blogs.dir/2/files/2018/05/DA00031027_Si-1.jpg"/>
        <PinterestItem title="Aircraft Recylced Into Furnace" genre="Aviation Explorer" mainImg="https://www.mitre.org/sites/default/files/images/aviation-fatigue-pilot-safety.jpg"/>
      </div>
    </div>
  )
}

ReactDOM.render(<Pinterest />, document.getElementById("root"))
