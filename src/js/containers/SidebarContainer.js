import { connect } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';

const mapStateToProps = state => ({
  articles: state.articles,
  categories: state.categories
});

export default connect(
  mapStateToProps
)(Sidebar);