import { connect } from 'react-redux';
import Articles from '../components/admin/Articles';
import { addArticle, deleteArticle, changeArticle } from '../actions/articles';
import { deleteArticleComments } from '../actions/comments';
import sortTypes, { compareFunctions } from '../constants/sortTypes';
import { linkCategories } from '../utilities';

const mapStateToProps = ({ articles, categories, comments }) => ({
  articles: linkCategories(
    articles.sort(compareFunctions[sortTypes.LATEST]),
    categories
  ),
  categories,
  comments
});

const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article)),
  deleteArticle: id => dispatch(deleteArticle(id)),
  deleteArticleComments: commentsId =>
    dispatch(deleteArticleComments(commentsId)),
  changeArticle: article => dispatch(changeArticle(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);
