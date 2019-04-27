import { connect } from 'react-redux';
import Comments from '../components/comments/Comments';
import { addComment } from '../actions/comments';
import { changeCommentsNumber } from '../actions/articles';
import userTypes from '../constants/userTypes';
import { linkUserName } from '../utilities';
import sortTypes, { compareFunctions } from '../constants/sortTypes';

const mapStateToProps = ({ users, currentUser, ...state }, {articleId}) => {
  let comments = state.comments
    .filter(
      comment =>
        comment.validate === true && comment.articleId === articleId
    )
    .sort(compareFunctions[sortTypes.LATEST])
    .map(_ => linkUserName(_, users));
  return {
    comments,
    currentUser,
    articleId
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
