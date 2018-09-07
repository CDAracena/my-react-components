import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css'



const CreditCard = (cardInfo)=> {
  return (<div className="card-container">
    <div><div className="bank-name"><span className="icon-holder"><i className="fa fa-address-card"></i></span>{cardInfo.bankName}</div></div>
    <div><div className="card-num importantInfo">{cardInfo.cardNum} </div> </div>
    <div className="small-text"> {cardInfo.cardNum.substring(0,4)}</div>
    <div className="expiration-date"><div className="valid-thru">Valid Thru</div>{cardInfo.expirationDate}</div>
    <div className="full-name">{cardInfo.fullName.toUpperCase()}</div>
  </div>

  )
}


ReactDOM.render(<CreditCard bankName="Chasey, Inc." cardNum="5562 5678 8765 2311" expirationDate="08/22" fullName="Joe Smith"/>, document.querySelector("#root"))
