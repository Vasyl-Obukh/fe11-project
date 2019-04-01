import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Articles from '../components/articles/Articles';
import paths from '../constants/paths';

const mapStateToProps = (state, props) => {
  const pageLimit = 1;
  let pageNotFound = false;
  let pages;
  const {
    path,
    params: { number: currentPage = 1, categoryName }
  } = props.match;
  const pageValidation = /^\d+$/.test(currentPage);
  const offset = (currentPage - 1) * pageLimit;
  const category = state.categories.filter(
    category => category.name === categoryName
  )[0];
  let articles = category ? state.articles.filter(_ =>
    _.categoriesId.includes(category.id)
  ) : [];

  const getPagesAmount = (articles, limit) => Math.ceil(articles.length / limit);

  switch (path) {
    case paths.MAIN_FIRST_PAGE:
      pages = getPagesAmount(state.articles, pageLimit);
      articles = state.articles.slice(offset, offset + pageLimit);
      break;
    case paths.MAIN_N_PAGE:
      if (pageValidation && state.articles.length > offset) {
        pages = getPagesAmount(state.articles, pageLimit);
        articles = state.articles.slice(offset, offset + pageLimit);
      } else {
        pageNotFound = true;
      }
      break;
    case paths.CATEGORY_FIRST_PAGE:
      if(category) {
        pages = getPagesAmount(articles, pageLimit);
        articles = articles.slice(offset, pageLimit);
      } else {
        pageNotFound = true;
      }
      break;
    case paths.CATEGORY_N_PAGE:
      if(category && pageValidation && articles.length > offset) {
        pages = getPagesAmount(articles, pageLimit);
        articles = articles.slice(offset, offset + pageLimit);
      } else {
        pageNotFound = true;
      }
      break;
    default:
      pageNotFound = true;
  }

  articles.forEach(article => {
    article.categoriesName = state.categories
      .filter(category => article.categoriesId.includes(category.id))
      .map(category => category.name);
    return article;
  });

  return {
    categories: state.categories,
    articles,
    currentPage,
    pageNotFound,
    pages
  };
};

export default withRouter(connect(mapStateToProps)(Articles));
