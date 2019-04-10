import { connect } from 'react-redux';
import AboutUs from '../components/pages/AboutUs';

const mapStateToProps = state => ({
  gallery: state.aboutUs.gallery,
  text: state.aboutUs.text
});

export default connect(mapStateToProps)(AboutUs);
