import { connect } from 'react-redux';
import Comments from '../components/admin/Comments';
import {
  deleteComment,
  changeComment,
  validateComment
} from '../actions/comments';
import { changeCommentsNumber } from '../actions/articles';
import sortTypes, { compareFunctions } from '../constants/sortTypes';
import { linkUserName, linkArticleTitle } from '../utilities';

const mapStateToProps = state => {
  let comments = state.comments
    .sort(compareFunctions[sortTypes.LATEST])
    .map(_ => linkArticleTitle(_, state.articles))
    .map(_ => linkUserName(_, state.users));
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
    dispatch(validateComment(id, validate));
    dispatch(changeCommentsNumber(articleId, validate));
  },
  changeComment: (id, text) => dispatch(changeComment(id, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
