import { connect } from 'react-redux';
import { logOut } from '../actions/currentUser';
import AdminPanel from '../components/admin/AdminPanel';

const mapStateToProps = state => ({
  userType: state.currentUser.userType
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanel);
