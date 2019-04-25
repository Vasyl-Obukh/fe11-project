import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'url-search-params-polyfill';
import sortTypes, { compareFunctions } from '../constants/sortTypes';
import paths from '../constants/paths';
import { getBreadcrumbs, linkCategories, getSortType } from '../utilities';
import Articles from '../components/articles/Articles';

const getUrlTemplate = (path, name) =>
  path === paths.CATEGORY_FIRST_PAGE
    ? path.replace(/:\w*/, name)
    : path === paths.CATEGORY_N_PAGE
      ? path.replace(/:.*/, name)
      : '';

const mapStateToProps = (state, props) => {
  let {
    history: {
      location: { search }
    },
    match: {
      path,
      params: { number = 1, categoryName }
    }
  } = props;
  const pageLimit = state.settings.pageLimit || 5;
  const pageNeighbours = 1;
  const sortType = getSortType(search);
  let pageNotFound = false;
  let pagesAmount = 0;

  const getOffset = () => (currentPage - 1) * pageLimit;
  const getPagesAmount = (articles = state.articles) =>
    Math.ceil(articles.length / pageLimit);
  const getArticles = (articles = state.articles) =>
    articles.sort(compareFunctions[sortType]).slice(offset, offset + pageLimit);

  number = parseInt(number);
  let currentPage = number > 0 ? number : 1;
  let offset = getOffset();

  let category = categoryName
    ? state.categories.find(category => category.name === categoryName)
    : null;
  let articles = category
    ? state.articles.filter(_ => _.categoriesId.includes(category.id))
    : [];

  let urlTemplate = getUrlTemplate(path, categoryName);
  let queryString = sortType !== sortTypes.LATEST ? `?sort=${sortType}` : '';

  switch (path) {
    case paths.MAIN_FIRST_PAGE:
      pagesAmount = getPagesAmount();
      articles = getArticles();
      break;
    case paths.MAIN_N_PAGE:
      pagesAmount = getPagesAmount();
      if (state.articles.length <= offset) {
        currentPage = pagesAmount;
      }
      offset = getOffset();
      articles = getArticles();
      break;
    case paths.CATEGORY_FIRST_PAGE:
      if (category) {
        pagesAmount = getPagesAmount(articles);
        articles = getArticles(articles);
      } else {
        pageNotFound = true;
      }
      break;
    case paths.CATEGORY_N_PAGE:
      if (category) {
        pagesAmount = getPagesAmount(articles);
        if (articles.length <= offset) {
          currentPage = pagesAmount;
        }
        offset = getOffset();
        articles = getArticles(articles);
      } else {
        pageNotFound = true;
      }
      break;
    default:
      pageNotFound = true;
  }

  articles = linkCategories(articles, state.categories);

  let breadcrumbs = getBreadcrumbs({
    categoryName: category ? category.name : null,
    currentPage,
    path
  });

  return {
    pageNotFound,
    articles,
    breadcrumbs,
    sortType,
    paginationSettings: {
      currentPage,
      pagesAmount,
      pageNeighbours,
      urlTemplate,
      queryString
    },
    changeSortType: sortType =>
      props.history.push(
        `${urlTemplate}${
          sortType !== sortTypes.LATEST ? `/?sort=${sortType}` : '/'
        }`
      )
  };
};

export default withRouter(connect(mapStateToProps)(Articles));
