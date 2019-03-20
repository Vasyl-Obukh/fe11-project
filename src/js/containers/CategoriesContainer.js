import { connect } from 'react-redux';
import CategoriesWidget from '../components/sidebar/CategoriesWidget';

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(CategoriesWidget);