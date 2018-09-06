import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

function AddressLabel(person) {
  const {fullName, address, cityState} = person
  return (<div className="address-label">
    <div>{fullName}</div>
    <div>{address}</div>
    <div>{cityState}</div>
  </div>)
}

const Stamp = () => {
  return (<span className="stamp">
    <span className="stamp-text">STAMP</span></span>)
}

AddressLabel.propTypes = {
  fullName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  cityState: PropTypes.string.isRequired
}

const Envelope = ({fromPerson, toPerson}) => {
  return (<div className="envelope-main-container"><div className="fromPerson">{fromPerson = <AddressLabel fullName="Bobby Bobo" address="55 E. 80th St" cityState="New York, NY"/>} <Stamp/></div>
     <div className="toPerson">{toPerson = <AddressLabel fullName="Jimmy Jab" address="124 Full Street" cityState="Orlando, FL"/>}</div>
  </div>)
}

ReactDOM.render(<Envelope/>, document.getElementById('root'))
