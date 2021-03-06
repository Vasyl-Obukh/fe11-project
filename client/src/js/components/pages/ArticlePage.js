import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import paths from '../../constants/paths';
import { formatDate } from '../../utilities';
import PageTemplate from '../PageTemplate';
import BreadCrumbs from '../other/Breadcrumbs';
import Comments from '../../containers/Comments';

export default class ArticlePage extends Component {
  componentDidMount() {
    fetch('/api/articles')
      .then(articles => articles.json())
      .then(articles => {
        this.props.setArticles(articles);
      });
  }

  render() {
    const { article, categories, breadcrumbs } = this.props;
    return !article ? (
      <Redirect to={paths.ERROR_404} />
    ) : (
      <PageTemplate>
        <div className='main__head'>
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
        <article className='article'>
          <h2 className='article__title'>{article.title}</h2>

          <div className='article__head'>
            <div className='article__categories'>
              <span>Categories: </span>
              {categories.length ? (
                categories.map(category => (
                  <Link
                    className='article__category'
                    key={category._id}
                    to={paths.CATEGORY_FIRST_PAGE.replace(/:\w*/, category.name)}
                  >
                    {category.name}
                  </Link>
                ))
              ) : (
                <span>none</span>
              )}
            </div>

            <div className='article__date'>
              <span>{formatDate(article.date)}</span>
            </div>
          </div>

          <div
            role='img'
            className='article__thumbnail'
            style={{ backgroundImage: `url(${article.thumbnailUrl})` }}
          />

          <div className='article__text'>
            <p>{article.text}</p>
          </div>
        </article>
        <Comments articleId={article._id} />
      </PageTemplate>
    );
  }
}

ArticlePage.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    text: PropTypes.string,
    _id: PropTypes.string
  }),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      _id: PropTypes.string
    })
  ),
  breadcrumbs: PropTypes.arrayOf(PropTypes.object),
  setArticles: PropTypes.func.isRequired,
};
