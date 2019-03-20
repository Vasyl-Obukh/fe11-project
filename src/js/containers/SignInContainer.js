import { connect } from 'react-redux';
import SignIn from '../components/sign/SignIn';
import { logIn } from '../actions/currentUser';

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);