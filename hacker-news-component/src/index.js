import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import axios from 'axios';
import Header from './Header';
import ArticleFile from './ArticleFile'
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

const HackerNewsComponent = ({articles}) => {
  return (
    <div className="main-container">
      <Header title="Hacker News"/>
      <ArticleFile articleArray={articles}/>
    </div>
  )
}

const hackerArticles = [{
  title: "Why I'm Suing The US Government",
  site: "bunniestudios.com",
  points: 1346,
  by: 'ivank',
  comments: 257
},{
  title: "Zenzizenzizenic",
  site: "wikipedia.org",
  points: 140,
  by: 'vinchuco',
  comments: 40
}, {
  title: "A practical security guide for web developers",
  site: "github.com",
  points: 72,
  by: 'zianwar',
  comments: 40
}, {
  title: "I got arrested in Kazakhstan and represented myself in court",
  site: "medium.com",
  points: 370,
  by: 'drpp',
  comments: 79
}, {
  title: "Sculpture of Housing Prices Ripping San Francisco Apart",
  site: "dougmccune.com",
  points: 254,
  by: 'dougmccune',
  comments: 149
}, {
  title: "Practical Guide to Bare Metal C++",
  site: "gitbooks.io",
  points: 175,
  by: 'adamnemecek',
  comments: 31
}, {
  title: "Superformula",
  site: "wikipedia.org",
  points: 77,
  by: 'GuiA',
  comments: 17
}];

console.log(hackerArticles)


ReactDOM.render(<HackerNewsComponent articles={hackerArticles}/>, document.getElementById("root"))
