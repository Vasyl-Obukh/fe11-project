import { connect } from 'react-redux';
import Slider from '../components/slider/Slider';

const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(mapStateToProps)(Slider);
