import React from 'react';
import Article from './Article';

export default function Articles({
  articles,
  categories,
  comments,
  addArticle,
  deleteArticle,
  deleteArticleComments,
  changeArticle
}) {
  return (
    <>
      <Article
        addArticle={addArticle}
        categories={categories}
        new={true}
      />
      {articles.map(article => {
        return <Article
          key={article.id}
          article={article}
          categories={categories}
          deleteArticle={() => {
            const commentsId = comments.filter(_ => _.articleId === article.id).map(_ => _.id);
            deleteArticle(article.id);
            deleteArticleComments(commentsId);
          }}
          changeArticle={changeArticle}
        />;
      })}
    </>
  );
}
