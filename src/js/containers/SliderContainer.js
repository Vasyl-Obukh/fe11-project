import { connect } from 'react-redux';
import Slider from '../components/slider/Slider';
import sortTypes, {compareFunctions} from '../constants/sortTypes';

const mapStateToProps = ({ articles, settings: { slidesNumber } }) => ({
  articles: articles.sort(compareFunctions[sortTypes.POPULAR]).slice(0, slidesNumber)
});

export default connect(mapStateToProps)(Slider);
