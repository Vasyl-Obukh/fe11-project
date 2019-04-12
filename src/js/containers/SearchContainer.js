import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResults from '../components/SearchResults';
import sortTypes, { compareFunctions } from '../constants/sortTypes';

const mapStateToProps = (state, props) => {
  let {
    history: {
      location: { search }
    },
    match: {
      params: { number: currentPage = 1 }
    }
  } = props;
  currentPage = parseInt(currentPage);
  const pageLimit = 3;
  const pageNeighbours = 1;
  const offset = (currentPage - 1) * pageLimit;
  const urlTemplate = '/search';

  const filter = search
    .slice(1)
    .split('&')
    .map(p => p.split('='))
    .reduce((obj, pair) => {
      const [key, value] = pair.map(decodeURIComponent);
      return { ...obj, [key]: value };
    }, {});
  const { query } = filter;
  const queryString = `?query=${query}`;
  const regs = query.split(' ').map(_ => new RegExp(_, 'i'));
  let articles = state.articles.filter(article =>
    regs.some(_ => _.test(article.title) || _.test(article.overview))
  );
  const pagesAmount = Math.ceil(articles.length / pageLimit); 
  articles = articles
    .sort(compareFunctions[sortTypes.LATEST])
    .slice(offset, offset + pageLimit);
  articles.forEach(article => {
    article.categoriesName = state.categories
      .filter(category => article.categoriesId.includes(category.id))
      .map(category => category.name);
    return article;
  });
  return {
    query,
    articles,
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
