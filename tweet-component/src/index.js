import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar';
import Time from './Time';
import NameHandle from './NameHandle';
import Message from './Message';
import ReplyBtn from './ReplyBtn';
import RetweetBtn from './RetweetBtn';
import LikeBtn from './LikeBtn'
import MoreOptionsBtn from './MoreOptionsBtn'
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

const Tweet = ({tweets})=> {
  return (
    <div>
  {tweets.map(tweet => <div className="tweet-container" key={tweet.id}>
        <Avatar img={tweet.img_src}/>
        <div className="second-half-container">
          <NameHandle userHandle={tweet.userHandle}/>
          <Message messageText={tweet.message}/>
          <div className="btn-section">
            <ReplyBtn replies={tweet.replyNum}/>
            <RetweetBtn retweets={tweet.retweets}/>
            <LikeBtn likes={tweet.Likes}/>
            <MoreOptionsBtn/>
          </div>
        </div>
      </div>
    )}
  </div>
  )
  }




let Tweets = [{
  userHandle: 'TainoAldo174',
  message: "Visiting Greece At The Moment",
  replyNum: 4,
  retweets: 8,
  Likes: 10,
  img_src: 'http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-11.png'
},{
  userHandle: 'NerdyNerd',
  message: "Enjoying the summer",
  replyNum: 2,
  retweets: 4,
  Likes: 5,
  img_src:'https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59094779-stock-illustration-profile-icon-male-avatar.jpg'
},{
  userHandle: 'UberDriver22',
  message: "Driving Around",
  replyNum: 9,
  retweets: 15,
  Likes: 20,
  img_src:'https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg'
}]

ReactDOM.render(<Tweet tweets={Tweets}/>, document.getElementById("root"))
