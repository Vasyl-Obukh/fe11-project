import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Articles from '../components/articles/Articles';

const mapStateToProps = (state, ownProps) => {
  const pageLimit = 3;
  const currentPage = ownProps.match.params.number;
  let articles;
  if (ownProps.match.params.categoryName) {
    const catName = state.categories.filter(
      _ => _.name === ownProps.match.params.categoryName
    )[0].id;
    articles = state.articles.filter(_ => _.categoriesId.includes(catName));
    if (ownProps.match.url === `/categories/${ownProps.match.params.categoryName}`) {
      articles = articles.slice(0, pageLimit);
    } else if (/^\d+$/.test(currentPage)) {
      const offset = (currentPage - 1) * pageLimit;
      articles = articles.slice(offset, offset + pageLimit);
    }
  } else if (ownProps.match.url === '/') {
    articles = state.articles.slice(0, pageLimit);
  } else if (/^\d+$/.test(currentPage)) {
    const offset = (currentPage - 1) * pageLimit;
    articles = state.articles.slice(offset, offset + pageLimit);
  }
  return {
    categories: state.categories,
    articles
  };
};

export default withRouter(connect(mapStateToProps)(Articles));
