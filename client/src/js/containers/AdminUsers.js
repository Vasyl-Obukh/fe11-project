import { connect } from 'react-redux';
import Users from '../components/admin/Users';

const mapStateToProps = ({ users }) => ({
  users
});

export default connect(
  mapStateToProps
)(Users);
