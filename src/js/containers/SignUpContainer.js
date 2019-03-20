import { connect } from 'react-redux';
import SignUp from '../components/sign/SignUp';
import { logIn } from '../actions/currentUser';
import { addUser } from '../actions/users';

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user)),
  logIn: user => dispatch(logIn(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
