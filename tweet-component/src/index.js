import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

function Avatar() {
  return (<div className="image-div"><img src="http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-11.png" alt="avatar-user" className="user-avatar-img"/></div>)
}

const Time = () => {
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
  let date = new Date();
  return (<span>
    {week[date.getDay()]}
  </span>)
}
const NameHandle = (props) => {
  return (<div className="user-handle-div">
    <h4 className="user-handle">{props.userHandle}</h4>
    *
    <div className="time-div">
      <Time/>
    </div>
  </div>)
}

function Message(props) {
  return (<div className="message-div">
    <p>{props.messageText}</p>
  </div>)
}

const ReplyBtn = () => {
  return (<span className="reply-btn">
    <i className="fa fa-reply"></i>
  </span>)
}
const RetweetBtn = () => {
  return (<span className="retweet-btn">
    <i className="fa fa-retweet"></i>
  </span>)
}
const LikeBtn = () => {
  return (<span className="like-btn">
    <i className="fa fa-heart"></i>
  </span>)
}

const MoreOptionsBtn = () => {
  return (
  <span className="more-options-btn"><i className="fa fa-ellipsis-h"></i> </span>
  )
}
class Tweet extends React.Component {
  render() {
    return (<div className="tweet-container">
      <Avatar/>
      <div className="second-half-container">
        <NameHandle userHandle="TainoAldo174"/>
        <Message messageText="Visiting Greece At The Moment"/>
        <div className="btn-section"><ReplyBtn/>
          <RetweetBtn/>
          <LikeBtn/>
          <MoreOptionsBtn/>
        </div>
      </div>
    </div>)
  }

}

ReactDOM.render(<Tweet/>, document.getElementById("root"))
