import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Articles from '../components/articles/Articles';

const mapStateToProps = (state, ownProps) => {
  return ({
    articles: ownProps.match.params.categoryName ? state.articles.filter(_ => _.category.indexOf(ownProps.match.params.categoryName) > -1) : state.articles //need to add sorting
  });
};

export default withRouter(connect(
  mapStateToProps
)(Articles));