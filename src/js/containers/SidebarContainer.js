import { connect } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';

const mapStateToProps = state => ({
  articles: state.articles.sort((a, b) => b.commentsNumber - a.commentsNumber).slice(0, 5),
  categories: state.categories
});

export default connect(
  mapStateToProps
)(Sidebar);
