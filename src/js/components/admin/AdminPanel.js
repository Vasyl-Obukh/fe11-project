import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import userTypes from '../../constants/userTypes';
import NavBar from './LeftNavBar';
import HomeContainer from '../../containers/AdminHomeContainer';
import SettingsContainer from '../../containers/SettingsContainer';
import AdminArticlesContainer from '../../containers/AdminArticlesContainer';
import AdminCategoriesContainer from '../../containers/AdminCategoriesContainer';
import AdminCommentsContainer from '../../containers/AdminCommentsContainer';
import AdminUsersContainer from '../../containers/AdminUsersContainer';
import Error404 from '../pages/Error404';

export default class AdminPanel extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.userType !== userTypes.ADMIN
      ? this.props.history.push('/')
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
    this.props.history.push('/');
  };

  render() {
    const { path } = this.props.match;

    return (
      <>
        <div className='admin__nav-menu nav-menu'>
          <NavBar logOut={this.onLogOut} history={this.props.history} />
        </div>
        <div className='admin__main'>
          <Switch>
            <Route exact path={path} component={HomeContainer} />
            <Route
              path={`${path}/settings`}
              component={SettingsContainer}
            />
            <Route
              path={`${path}/articles`}
              component={AdminArticlesContainer}
            />
            <Route
              path={`${path}/categories`}
              component={AdminCategoriesContainer}
            />
            <Route
              path={`${path}/comments`}
              component={AdminCommentsContainer}
            />
            <Route path={`${path}/users`} component={AdminUsersContainer} />
            <Redirect to='/error-404' />
          </Switch>
        </div>
      </>
    );
  }
}
