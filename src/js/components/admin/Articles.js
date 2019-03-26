import React from 'react';
import Article from './Article';

export default function Articles({
  articles,
  categories,
  addArticle,
  deleteArticle,
  changeArticle
}) {
  return (
    <>
      <Article
        addArticle={addArticle}
        categories={categories}
        new={true}
      />
      {articles.map(article => (
        <Article
          key={article.id}
          article={article}
          categories={categories}
          deleteArticle={() => deleteArticle(article.id)}
          changeArticle={changeArticle}
        />
      ))}
    </>
  );
}
