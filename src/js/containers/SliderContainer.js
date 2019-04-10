import { connect } from 'react-redux';
import Slider from '../components/slider/Slider';

const mapStateToProps = ({ articles, settings: { slidesNumber } }) => ({
  articles,
  slidesNumber
});

export default connect(mapStateToProps)(Slider);
