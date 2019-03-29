import { connect } from 'react-redux';
import Comments from '../components/Comments';
import { addComment } from '../actions/comments';
import { changeCommentsNumber } from '../actions/articles';
import userTypes from '../constants/userTypes';

const mapStateToProps = (state, ownProps) => {
  const comments = state.comments.filter(
    comment => comment.articleId === ownProps.articleId && comment.validate === true
  );
  const commentsU = comments.map(comment => {
    let cU = comment;
    cU.userName = state.users.filter(user => user.id === cU.userId)[0].name;
    return cU;
  });
  return {
    comments: commentsU,
    currentUser: state.currentUser,
    articleId: ownProps.articleId
  };
};

const mapDispatchToProps = dispatch => ({
  addComment: comment => {
    dispatch(addComment(comment));
    comment.userType === userTypes.ADMIN
      ? dispatch(changeCommentsNumber(comment.articleId, 1))
      : null;
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
