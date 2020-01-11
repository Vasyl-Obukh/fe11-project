import { connect } from 'react-redux';
import Sign from '../components/header/Sign';
import { logIn } from '../actions/currentUser';
import { addUser } from '../actions/users';
import InputError from '../InputError';

const mapStateToProps = ({ users }) => ({
  isUserExists: ({ email, password }) => {
    const user = users.find(_ => _.password == password && _.email === email);
    if (!user) {
      throw new InputError('Entered data is incorrect');
    }
    return user;
  }
});

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user)),
  logIn: user => dispatch(logIn(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sign);
