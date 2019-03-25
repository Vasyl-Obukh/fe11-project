import React from 'react';
import ArticleNew from './ArticleNew';
import Article from './Article';

export default function Articles({
  articles,
  categories,
  addArticle,
  deleteArticle,
  changeArticle
}) {
  //console.log(props);
  return (
    <>
      <ArticleNew addArticle={addArticle} categories={categories} />
      {articles.map(_ => (
        <Article key={_.id} article={_} />
      ))}
    </>
  );
}
