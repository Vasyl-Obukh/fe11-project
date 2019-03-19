import { connect } from 'react-redux';
import Articles from '../components/Articles';
import visibilityFilters from '../constants/visibilityFilters';

const getVisibleArticles = (articles, filter) => {
  switch (filter.filterType) {
  case visibilityFilters.SHOW_ALL:
    return articles;
  case visibilityFilters.SHOW_BY_CATEGORY:
    return articles.filter(_ => _.category.some(_ => filter.categories.indexOf(_) > -1)); //needs improvement
  default:
    throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = state => ({
  articles: getVisibleArticles( state.articles, state.visibilityFilter )
});

export default connect(
  mapStateToProps
)(Articles);