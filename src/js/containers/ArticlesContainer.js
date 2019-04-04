import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Articles from '../components/articles/Articles';
import paths from '../constants/paths';
import { compareFunctions } from '../constants/sortTypes';

const mapStateToProps = (state, props) => {
  const pageLimit = 3;
  const { sortType } = props;
  const pageNeighbours = 1;
  let pageNotFound = false;
  let pagesAmount;
  const {
    path,
    url,
    params: { number: currentPage = 1, categoryName }
  } = props.match;
  const pageValidation = /^\d+$/.test(currentPage);
  const offset = (currentPage - 1) * pageLimit;
  const category = state.categories.filter(
    category => category.name === categoryName
  )[0];
  let articles = category
    ? state.articles.filter(_ => _.categoriesId.includes(category.id))
    : [];

  const { urlTemplate } = props;
  /* path === paths.CATEGORY_FIRST_PAGE
    ? path.replace(':categoryName', url.split('/')[2])
    : path === paths.CATEGORY_N_PAGE
      ? path
        .replace(':categoryName', url.split('/')[2])
        .split('/')
        .slice(0, -1)
        .join('/')
      : ''; */

  const getPagesAmount = (articles, limit) =>
    Math.ceil(articles.length / limit);

  switch (path) {
    case paths.MAIN_FIRST_PAGE:
      pagesAmount = getPagesAmount(state.articles, pageLimit);
      articles = state.articles.sort(compareFunctions[sortType]).slice(offset, offset + pageLimit);
      break;
    case paths.MAIN_N_PAGE:
      if (pageValidation && state.articles.length > offset) {
        pagesAmount = getPagesAmount(state.articles, pageLimit);
        articles = state.articles
          .sort(compareFunctions[sortType])
          .slice(offset, offset + pageLimit);
      } else {
        pageNotFound = true;
      }
      break;
    case paths.CATEGORY_FIRST_PAGE:
      if (category) {
        pagesAmount = getPagesAmount(articles, pageLimit);
        articles = articles
          .sort(compareFunctions[sortType])
          .slice(offset, pageLimit);
      } else {
        pageNotFound = true;
      }
      break;
    case paths.CATEGORY_N_PAGE:
      if (category && pageValidation && articles.length > offset) {
        pagesAmount = getPagesAmount(articles, pageLimit);
        articles = articles
          .sort(compareFunctions[sortType])
          .slice(offset, offset + pageLimit);
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
    pageNotFound,
    articles,
    paginationSettings: {
      currentPage: Number(currentPage),
      pagesAmount,
      pageNeighbours,
      urlTemplate
    }
  };
};

export default withRouter(connect(mapStateToProps)(Articles));
