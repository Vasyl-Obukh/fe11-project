import { connect } from 'react-redux';
import Comments from '../components/admin/Comments';
import {
  deleteComment,
  changeComment,
  validateComment
} from '../actions/comments';
import { changeCommentsNumber } from '../actions/articles';

const mapStateToProps = state => {
  const comments = state.comments.map(_ => {
    const comment = Object.assign({}, _);
    comment.articleTitle = state.articles.filter(
      _ => _.id === comment.articleId
    )[0].title;
    comment.userName = state.users.filter(
      user => user.id === comment.userId
    )[0].name;
    return comment;
  });
  return {
    comments
  };
};

const mapDispatchToProps = dispatch => ({
  deleteComment: (id, articleId, validate) => {
    dispatch(deleteComment(id));
    validate ? dispatch(changeCommentsNumber(articleId, false)) : null;
  },
  validateComment: (id, articleId, validate) => {
    console.log(validate);
    dispatch(validateComment(id, validate));
    dispatch(changeCommentsNumber(articleId, validate));
  },
  changeComment: (id, text) => dispatch(changeComment(id, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
