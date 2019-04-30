import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

export default function Articles({
  articles = [],
  categories = [],
  comments = [],
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
        <li className='list-head__item list-head__item_comments'>Comments</li>
        <li className='list-head__item list-head__item_date'>Date</li>
        <li className='list-head__item'>Edit</li>
      </ul>
      {articles.length ? (
        <ul className='admin-list'>
          {articles.map(article => {
            return (
              <li key={article.id} className='list-item list-item_articles'>
                <Article
                  article={article}
                  categories={categories}
                  deleteArticle={() => {
                    let commentsId = comments
                      .filter(_ => _.articleId === article.id)
                      .map(_ => _.id);
                    deleteArticle(article.id);
                    deleteArticleComments(commentsId);
                  }}
                  changeArticle={changeArticle}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>{'There\'s no articles here yet'}</h3>
      )}
    </>
  );
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.arrayOf(PropTypes.object),
  comments: PropTypes.arrayOf(PropTypes.object),
  addArticle: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  deleteArticleComments: PropTypes.func.isRequired,
  changeArticle: PropTypes.func.isRequired
};
