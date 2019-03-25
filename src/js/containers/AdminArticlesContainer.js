import { connect } from 'react-redux';
import Articles from '../components/admin/Articles';
import { addArticle, deleteArticle, changeArticle } from '../actions/articles';

const mapStateToProps = state => ({
  articles: state.articles,
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article)),
  deleteArticle: id => dispatch(deleteArticle(id)),
  changeArticle: article => dispatch(changeArticle(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);
