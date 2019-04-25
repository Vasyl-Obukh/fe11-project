import { connect } from 'react-redux';
import Footer from '../components/footer/Footer';

const mapStateToProps = ({ settings: { copyright, socialLinks } }) => ({
  socialLinks,
  copyright
});

export default connect(mapStateToProps)(Footer);
