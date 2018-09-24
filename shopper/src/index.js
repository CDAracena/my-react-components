import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav'
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import {items} from './static-data'
import './index.css';


class App extends React.Component{
  state = {
    activeTab: 0,
    cart: []
  };

  handleTabChange = (index)=> {
    this.setState({activeTab: index}, function(){

    })
  }
    handleAddToCart = (item)=> {
      this.setState({
        cart: [...this.state.cart, item.id]
      })
    }

    handleRemoveOne = (item)=> {
      let index = this.state.cart.indexOf(item.id);
      this.setState({
        cart: [...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)]
      })
    }
    renderCart(){
      let itemCounts = this.state.cart.reduce((itemCounts, itemId)=>{
        itemCounts[itemId] = itemCounts[itemId] || 0;
        itemCounts[itemId]++
        return itemCounts;
      },{});
      let cartItems = Object.keys(itemCounts).map(itemId => {
        var item = items.find(item => item.id === parseInt(itemId, 10));
        return {
          ...item, count: itemCounts[itemId]
        }
      })
      return(
        <CartPage items={cartItems} onAddOne={this.handleAddToCart} onRemoveOne={this.handleRemoveOne}/>
      )
    }

  renderContent() {
    switch(this.state.activeTab){
      default:
      case 0: return( <ItemPage items={items} onAddToCart={this.handleAddToCart}/> )
      case 1: return this.renderCart();

    }

  }
  render(){
    let {activeTab} = this.state
    return (
      <div className="App">
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange}/>
        <main className="App-content">
          <div>{this.state.cart.length} items</div>
          {this.renderContent()}
        </main>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
