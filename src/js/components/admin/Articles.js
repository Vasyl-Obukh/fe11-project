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
      <Article addArticle={addArticle} categories={categories} new={true} />
      <ul className='list-head list-head_articles'>
        <li className='list-head__item'>Title</li>
        <li className='list-head__item'>Categories</li>
        <li className='list-head__item'>Comments</li>
        <li className='list-head__item'>Date</li>
        <li className='list-head__item'>Edit</li>
      </ul>
      <ul className='admin-list'>
        {articles.map(article => {
          return (
            <Article
              key={article.id}
              article={article}
              categories={categories}
              deleteArticle={() => {
                const commentsId = comments
                  .filter(_ => _.articleId === article.id)
                  .map(_ => _.id);
                deleteArticle(article.id);
                deleteArticleComments(commentsId);
              }}
              changeArticle={changeArticle}
            />
          );
        })}
      </ul>
    </>
  );
}
