import { connect } from 'react-redux';
import Articles from '../components/admin/Articles';
import { addArticle, deleteArticle, changeArticle } from '../actions/articles';
import { deleteArticleComments } from '../actions/comments';
import sortTypes, { compareFunctions } from '../constants/sortTypes';

const mapStateToProps = state => ({
  articles: state.articles.sort(compareFunctions[sortTypes.LATEST]),
  categories: state.categories,
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article)),
  deleteArticle: id => dispatch(deleteArticle(id)),
  deleteArticleComments: commentsId => dispatch(deleteArticleComments(commentsId)),
  changeArticle: article => dispatch(changeArticle(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);
