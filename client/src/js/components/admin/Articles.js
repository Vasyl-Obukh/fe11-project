import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

export default class Articles extends Component {
  componentDidMount() {
    this.fetchCategories();
    this.fetchArticles();
  }

  fetchArticles = () => {
    fetch('/api/articles')
      .then(articles => articles.json())
      .then(articles => {
        this.props.setArticles(articles);
      });
  };

  fetchCategories = () => {
    fetch('/api/categories')
      .then(categories => categories.json())
      .then(categories => {
        this.props.setCategories(categories);
      });
  };

  render() {
    const {
      articles = [],
      categories = [],
      comments = [],
      addArticle,
      deleteArticle,
      deleteArticleComments,
      changeArticle
    } = this.props;

    return (
      <>
        <Article addArticle={addArticle} categories={categories} new={true} fetchArticles={this.fetchArticles} />
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
                <li key={article._id} className='list-item list-item_articles'>
                  <Article
                    article={article}
                    categories={categories}
                    deleteArticle={() => {
                      let commentsId = comments
                        .filter(_ => _.articleId === article._id)
                        .map(_ => _._id);
                      deleteArticle(article._id);
                      deleteArticleComments(commentsId);
                    }}
                    changeArticle={changeArticle}
                    fetchArticles={this.fetchArticles}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <h3 className='absence'>{'There\'s no articles here yet'}</h3>
        )}
      </>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.arrayOf(PropTypes.object),
  comments: PropTypes.arrayOf(PropTypes.object),
  addArticle: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  deleteArticleComments: PropTypes.func.isRequired,
  changeArticle: PropTypes.func.isRequired,
  setArticles: PropTypes.func.isRequired,
  setCategories: PropTypes.func.isRequired,
};
