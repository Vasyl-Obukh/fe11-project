import { connect } from 'react-redux';
import ArticlePage from '../components/pages/ArticlePage';
import { getBreadcrumbs } from '../utilities';

const mapStateToProps = (state, ownProps) => {
  let article = state.articles.find(
    article => ownProps.match.params.articleId === article.id
  );
  return {
    article,
    categories: article ? state.categories.filter(category =>
      article.categoriesId.includes(category.id)
    ) : [],
    breadcrumbs: article ? getBreadcrumbs({path: ownProps.match.path, title: article.title}) : null
  };
};

export default connect(mapStateToProps)(ArticlePage);
