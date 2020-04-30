import { connect } from 'react-redux';
import ArticlePage from '../components/pages/ArticlePage';
import { getBreadcrumbs } from '../utilities';
import * as actions from '../actions/articles';

const mapStateToProps = (state, ownProps) => {
  const article = state.articles.find(
    article => ownProps.match.params.articleId === article._id
  );
  return {
    article,
    categories: article ? state.categories.filter(category =>
      article.categoriesId.includes(category._id)
    ) : [],
    breadcrumbs: article ? getBreadcrumbs({path: ownProps.match.path, title: article.title}) : null
  };
};

const mapDispatchToProps = dispatch => ({
  setArticles: articles => dispatch(actions.setArticles(articles)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
