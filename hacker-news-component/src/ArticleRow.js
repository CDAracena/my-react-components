import React from 'react';
import './index.css';
import ArticleTitle from './ArticleTitle';
import ArticleSite from './ArticleSite';
import ArticlePoints from './ArticlePoints';
import ArticleOptions from './ArticleOptions'

const ArticleRow = ({article}) => {
  return (<div className="article-row">
    <div className="top-section">
      <i class="fa fa-chevron-circle-up"></i>
      <ArticleTitle article={article.title}/>
      <ArticleSite article={article.site}/>
    </div>
    <div className="bottom-section">
      <ArticlePoints points={article.points} author={article.by}/>
      <ArticleOptions comments={article.comments}/>
    </div>
  </div>)
}

export default ArticleRow;
