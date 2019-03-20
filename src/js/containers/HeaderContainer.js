import { connect } from 'react-redux';
import { logOut } from '../actions/currentUser';
import Header from '../components/header/Header';

const mapStateToProps = state => ({
  categories: state.categories,
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);