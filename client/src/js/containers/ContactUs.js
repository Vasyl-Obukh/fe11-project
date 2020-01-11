import { connect } from 'react-redux';
import ContactUs from '../components/pages/ContactUs';

const mapStateToProps = ({
  settings: { socialLinks, address, phoneNumber }
}) => ({
  socialLinks,
  address,
  phoneNumber
});

export default connect(mapStateToProps)(ContactUs);
