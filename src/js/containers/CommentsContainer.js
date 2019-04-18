import { connect } from 'react-redux';
import Comments from '../components/Comments';
import { addComment } from '../actions/comments';
import { changeCommentsNumber } from '../actions/articles';
import userTypes from '../constants/userTypes';
import sortTypes, { compareFunctions } from '../constants/sortTypes';

const mapStateToProps = (state, ownProps) => {
  const comments = state.comments
    .filter(
      comment =>
        comment.validate === true && comment.articleId === ownProps.articleId
    )
    .sort(compareFunctions[sortTypes.LATEST])
    .map(_ => {
      const comment = Object.assign({}, _);
      comment.userName = state.users.filter(
        user => user.id === comment.userId
      )[0].name;
      return comment;
    });
  return {
    comments: comments,
    currentUser: state.currentUser,
    articleId: ownProps.articleId
  };
};

const mapDispatchToProps = dispatch => ({
  addComment: comment => {
    dispatch(addComment(comment));
    comment.userType === userTypes.ADMIN
      ? dispatch(changeCommentsNumber(comment.articleId, true))
      : null;
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
