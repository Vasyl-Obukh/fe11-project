import { connect } from 'react-redux';
import Comments from '../components/comments/Comments';
import { addComment, setComments } from '../actions/comments';
import { changeCommentsNumber } from '../actions/articles';
import roles from '../constants/roles';
import { linkUserName } from '../utilities';
import sortTypes, { compareFunctions } from '../constants/sortTypes';

const mapStateToProps = ({ users, currentUser, comments }, { articleId }) => {
  return {
    comments: comments
      .filter(
        comment => comment.validated === true && comment.articleId === articleId
      )
      .sort(compareFunctions[sortTypes.LATEST])
      .map(_ => linkUserName(_, users)),
    currentUser,
    articleId
  };
};

const mapDispatchToProps = dispatch => ({
  addComment: comment => {
    dispatch(addComment(comment));
    comment.role === roles.ADMIN
      ? dispatch(changeCommentsNumber(comment.articleId, true))
      : null;
  },
  setComments: comments => dispatch(setComments(comments)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
