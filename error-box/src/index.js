import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css'

const ErrorBox = ({children}) => {
  let childrenCount = React.Children.count(children)
  return (
    <div>
    {children}
    {childrenCount}
  </div>
)
}

const App = () => {
  return (<div className="app">
    <ErrorBox> <div className="error-box"><i className="fa fa-exclamation-triangle"></i> <span> Error Alert! </span></div> </ErrorBox>
  </div>
)
  }



ReactDOM.render(<App/>, document.getElementById("root"))
