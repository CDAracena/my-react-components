import React from 'react';
import ArticleRow from './ArticleRow';
import './index.css';


const ArticleFile = ({articleArray}) => {
  return (
    <div className="article-container">
      {articleArray.map(article => <ArticleRow key={article.id} article={article}/> )}
    </div>
  )
}


export default ArticleFile;
