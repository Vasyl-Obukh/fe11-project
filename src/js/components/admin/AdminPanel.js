import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import userTypes from '../../constants/userTypes';
import NavBar from './LeftNavBar';
import Home from '../../containers/AdminHome';
import Settings from '../../containers/Settings';
import AdminArticles from '../../containers/AdminArticles';
import AdminCategories from '../../containers/AdminCategories';
import AdminComments from '../../containers/AdminComments';
import AdminUsers from '../../containers/AdminUsers';


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
            <Route exact path={path} component={Home} />
            <Route
              path={`${path}/settings`}
              component={Settings}
            />
            <Route
              path={`${path}/articles`}
              component={AdminArticles}
            />
            <Route
              path={`${path}/categories`}
              component={AdminCategories}
            />
            <Route
              path={`${path}/comments`}
              component={AdminComments}
            />
            <Route path={`${path}/users`} component={AdminUsers} />
            <Redirect to='/error-404' />
          </Switch>
        </div>
      </>
    );
  }
}
