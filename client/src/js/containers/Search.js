import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'url-search-params-polyfill';
import paths from '../constants/paths';
import sortTypes, { compareFunctions } from '../constants/sortTypes';
import { linkCategories } from '../utilities';
import SearchResults from '../components/pages/SearchResults';

const mapStateToProps = (state, props) => {
  let {
    history: {
      location: { search }
    },
    match: {
      params: { number = 1 }
    }
  } = props;
  const getOffset = () => (currentPage - 1) * pageLimit;
  const pageLimit = state.settings.pageLimit || 5;
  const pageNeighbours = 1;
  const urlTemplate = paths.SEARCH_FIRST_PAGE;

  number = parseInt(number);
  let currentPage = number > 0 ? number : 1;
  let offset = getOffset();

  const query = new URLSearchParams(search).get('query');
  const queryString = `?query=${query}`;
  const regs = query
    .split(/\W+/)
    .filter(Boolean)
    .map(_ => new RegExp(_, 'i'));
  let articles = state.articles.filter(article =>
    regs.some(_ => _.test(article.title) || _.test(article.overview))
  );

  const pagesAmount = Math.ceil(articles.length / pageLimit);
  if (articles.length <= offset) {
    currentPage = pagesAmount;
    offset = getOffset();
  }
  articles = articles
    .sort(compareFunctions[sortTypes.LATEST])
    .slice(offset, offset + pageLimit);
  articles = linkCategories(articles, state.categories);

  return {
    articles,
    query,
    paginationSettings: {
      currentPage,
      pagesAmount,
      pageNeighbours,
      urlTemplate,
      queryString
    }
  };
};

export default withRouter(connect(mapStateToProps)(SearchResults));
