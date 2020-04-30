import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import { Redirect } from 'react-router-dom';
import Pagination from '../other/Pagination';
import Sort from '../other/Sort';
import Breadcrumbs from '../other/Breadcrumbs';
import paths from '../../constants/paths';

export default class Articles extends Component {
  componentDidMount() {
    fetch('/api/articles')
      .then(articles => articles.json())
      .then(articles => {
        this.props.setArticles(articles);
      });
  }

  render()  {
    const {
      articles,
      pageNotFound,
      paginationSettings,
      changeSortType,
      sortType,
      breadcrumbs
    } = this.props;
    return pageNotFound ? (
      <Redirect to={paths.ERROR_404}/>
    ) : (
        <>
          <div className='main__head'>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <Sort sortType={sortType} changeSortType={changeSortType}/>
          </div>
          {articles.length ? (
            articles.map(article => <Article key={article._id} article={article}/>)
          ) : (
            <h2 className='absence'>{'There\'s no articles here yet'}</h2>
          )}
          <Pagination paginationSettings={paginationSettings}/>
        </>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  pageNotFound: PropTypes.bool.isRequired,
  paginationSettings: PropTypes.object.isRequired,
  changeSortType: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(PropTypes.object).isRequired,
  setArticles: PropTypes.func.isRequired,
};
