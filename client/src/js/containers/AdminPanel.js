import { connect } from 'react-redux';
import { logOut } from '../actions/currentUser';
import AdminPanel from '../components/admin/AdminPanel';

const mapStateToProps = ({ currentUser: { role }}) => ({
  role,
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPanel);
