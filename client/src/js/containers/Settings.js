import { connect } from 'react-redux';
import Settings from '../components/admin/Settings';
import { changeSettings, changeContent } from '../actions/settings';

const mapStateToProps = ({settings: {socialLinks = {}, ...settings}, aboutUs}) => ({
  socialLinks,
  ...settings,
  ...aboutUs
});

const mapDispatchToProps = dispatch => ({
  changeSettings: settings => dispatch(changeSettings(settings)),
  changeContent: content => dispatch(changeContent(content))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
