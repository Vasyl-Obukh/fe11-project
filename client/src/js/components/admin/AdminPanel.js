import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from '../../containers/AdminHome';
import Settings from '../../containers/Settings';
import AdminArticles from '../../containers/AdminArticles';
import AdminCategories from '../../containers/AdminCategories';
import AdminComments from '../../containers/AdminComments';
import AdminUsers from '../../containers/AdminUsers';
import roles from '../../constants/roles';
import paths from '../../constants/paths';


export default class AdminPanel extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.role !== roles.ADMIN
      ? this.props.history.push(paths.MAIN_FIRST_PAGE)
      : null;
  };

  componentDidMount = () => {
    document.getElementById('root').classList.add('admin');
  };

  componentWillUnmount = () => {
    document.getElementById('root').classList.remove('admin');
  };

  onLogOut = () => {
    this.props.logOut();
    this.props.history.push(paths.MAIN_FIRST_PAGE);
  };

  render() {
    const { path } = this.props.match;

    return (
      <>
        <div className='admin__nav-menu nav-menu'>
          <NavBar logOut={this.onLogOut} />
        </div>
        <div className='admin__main'>
          <Switch>
            <Route exact path={path} component={Home} />
            <Route
              path={paths.ADMIN_SETTINGS}
              component={Settings}
            />
            <Route
              path={paths.ADMIN_ARTICLES}
              component={AdminArticles}
            />
            <Route
              path={paths.ADMIN_CATEGORIES}
              component={AdminCategories}
            />
            <Route
              path={paths.ADMIN_COMMENTS}
              component={AdminComments}
            />
            <Route path={paths.ADMIN_USERS} component={AdminUsers} />
            <Redirect to={paths.ERROR_404} />
          </Switch>
        </div>
      </>
    );
  }
}
