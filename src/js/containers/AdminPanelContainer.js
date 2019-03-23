import { connect } from 'react-redux';
import AdminPanel from '../components/admin/AdminPanel';

const mapStateToProps = state => ({
  userType: state.currentUser.userType
});

export default connect(mapStateToProps)(AdminPanel);