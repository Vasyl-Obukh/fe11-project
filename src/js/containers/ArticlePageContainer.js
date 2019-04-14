import { connect } from 'react-redux';
import ArticlePage from '../components/pages/ArticlePage';

const mapStateToProps = (state, ownProps) => {
  const article = state.articles.filter(
    article => ownProps.match.params.articleId === article.id
  )[0];
  return {
    article: article,
    categories: article ? state.categories.filter(category =>
      article.categoriesId.includes(category.id)
    ) : [],
    breadcrumbs: [{name: 'Home', url: '/'},{name: 'Articles', url: '/'}, {name: article.title.slice(0, 30) + '...', last: true}]
  };
};

export default connect(mapStateToProps)(ArticlePage);
