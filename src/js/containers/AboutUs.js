import { connect } from 'react-redux';
import AboutUs from '../components/pages/AboutUs';

const mapStateToProps = ({ aboutUs: { gallery, text } }) => ({
  gallery,
  text
});

export default connect(mapStateToProps)(AboutUs);
