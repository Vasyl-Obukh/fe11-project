import { connect } from 'react-redux';
import Slider from '../components/slider/Slider';
import sortTypes, {compareFunctions} from '../constants/sortTypes';

// TODO: getting slidesNumber as String
const mapStateToProps = ({ articles, settings: { slidesNumber = 5 } }) => ({
  articles: articles.sort(compareFunctions[sortTypes.POPULAR]).slice(0, 5)
});

export default connect(mapStateToProps)(Slider);
