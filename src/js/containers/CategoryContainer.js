import { connect } from 'react-redux';
import Articles from '../components/Articles';

const mapStateToProps = (state, ownProps) => ({
  articles: state.articles.filter(_ => _.category.indexOf(ownProps.categoryName) > -1)
});

export default connect(
  mapStateToProps
)(Articles);