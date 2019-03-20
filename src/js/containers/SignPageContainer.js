import { connect } from 'react-redux';
import SignPage from '../components/pages/SignPage';

const mapStateToProps = state => ({
  users: state.users
});

//const mapDispatchToProps = dispatch =>

export default connect(mapStateToProps)(SignPage);