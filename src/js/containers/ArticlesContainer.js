import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Articles from '../components/articles/Articles';

const mapStateToProps = (state, ownProps) => {
  const {
    params: { number: currentPage, categoryName },
    url
  } = ownProps.match;
  const pageLimit = 3;
  let articlesNotFound = false;
  const pageValidation = /^\d+$/.test(currentPage);
  const offset = (currentPage - 1) * pageLimit;
  let articles = [];
  let pages = 0;

  if (categoryName) {  
    const category = state.categories.filter(
      category => category.name === categoryName
    )[0];

    if (category) {
      articles = state.articles.filter(_ => _.categoriesId.includes(category.id));

      if (url === `/categories/${categoryName}`) {
        pages = Math.ceil(articles.length / pageLimit );
        articles = articles.slice(0, pageLimit);
      } else if (pageValidation && articles.length > (currentPage - 1) * pageLimit) {
        pages = articles.length;
        articles = articles.slice(offset, offset + pageLimit);
      }
    } else {
      articlesNotFound = true;
    }
  } else if (url === '/') {
    pages = Math.ceil(state.articles.length / pageLimit);
    articles = state.articles.slice(0, pageLimit);
  } else if (pageValidation && state.articles.length > (currentPage - 1) * pageLimit) {
    pages = Math.ceil(state.articles.length / pageLimit);
    articles = state.articles.slice(offset, offset + pageLimit);
  } else {
    articlesNotFound = true;
  }
  return {
    categories: state.categories,
    pages,
    articles,
    currentPage: currentPage ? currentPage : 1,
    articlesNotFound
  };
};

export default withRouter(connect(mapStateToProps)(Articles));
