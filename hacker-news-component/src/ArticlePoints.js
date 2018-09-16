import React from 'react';
import './index.css';
import ArticleAuthor from './ArticleAuthor'


const ArticlePoints = ({points, author}) => {
  return (
    <div> {points} by <ArticleAuthor author={author}/></div>
  )
}

export default ArticlePoints;
