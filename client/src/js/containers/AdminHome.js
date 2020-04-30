import { connect } from 'react-redux';
import Home from '../components/admin/Home';
//import roles from '../constants/roles';

export default connect(
  state => ({
    articlesNumber: state.articles.length,
    categoriesNumber: state.categories.length,
    //usersNumber: state.users.filter(_ => _.role === roles.USER).length,
    commentsNumber: state.comments.filter(_ => _.validated).length
  })
)(Home);
