import { connect } from 'react-redux';
import ArticlePage from '../components/pages/ArticlePage';

const mapStateToProps = (state, ownProps) => {
  const article = state.articles.filter(
    article => ownProps.match.params.articleId === article.id
  )[0];
  return {
    article: article,
    categories: state.categories.filter(category =>
      article.categoriesId.includes(category.id)
    )
  };
};

export default connect(mapStateToProps)(ArticlePage);
