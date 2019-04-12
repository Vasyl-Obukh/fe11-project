import { connect } from 'react-redux';
import Sidebar from '../components/sidebar/Sidebar';
import sortTypes, { compareFunctions } from '../constants/sortTypes';

const mapStateToProps = ({ articles, categories }) => ({
  articles: articles.sort(compareFunctions[sortTypes.POPULAR]).slice(0, 3),
  categories: categories.sort((a, b) => a.name > b.name ? 1 : -1)
});

export default connect(mapStateToProps)(Sidebar);
