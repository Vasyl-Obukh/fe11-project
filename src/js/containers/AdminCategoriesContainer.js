import { connect } from 'react-redux';
import Categories from '../components/admin/Categories';
import { addCategory, deleteCategory, changeCategoryName } from '../actions/categories';

const mapStateToProps = state => ({
  categories: state.categories.sort((a, b) => a.name > b.name ? 1 : -1)
});

const mapDispatchToProps = dispatch => ({
  addCategory: name => dispatch(addCategory(name)),
  deleteCategory: id => dispatch(deleteCategory(id)),
  changeCategory: category => dispatch(changeCategoryName(category))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
