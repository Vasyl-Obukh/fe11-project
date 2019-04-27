import { connect } from 'react-redux';
import Home from '../components/admin/Home';
import userTypes from '../constants/userTypes';

export default connect(
  state => ({
    articlesNumber: state.articles.length,
    categoriesNumber: state.categories.length,
    usersNumber: state.users.filter(_ => _.userType === userTypes.USER).length,
    commentsNumber: state.comments.filter(_ => _.validate).length
  })
)(Home);
