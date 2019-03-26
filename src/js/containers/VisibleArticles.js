import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Articles from '../components/articles/Articles';

const mapStateToProps = (state, ownProps) => ({
  articles: ownProps.match.params.categoryName
    ? state.articles.filter(
      article =>
        article.categoriesId.indexOf(
          state.categories.filter(
            category => category.name === ownProps.match.params.categoryName
          )[0].id
        ) > -1
    )
    : state.articles,
  categories: state.categories
});

export default withRouter(connect(mapStateToProps)(Articles));
