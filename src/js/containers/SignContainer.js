import { connect } from 'react-redux';
import Sign from '../components/header/Sign';
import { logIn } from '../actions/currentUser';
import { addUser } from '../actions/users';

const mapStateToProps = state => ({
  users: state.users,
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user)),
  logIn: user => dispatch(logIn(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sign);