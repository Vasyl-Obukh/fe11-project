import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import userTypes from '../../constants/userTypes';
import StatusBar from './StatusBar';
import LeftNavBar from './LeftNavBar';
import Home from './Home';
import Pages from './Pages';
import AdminArticlesContainer from '../../containers/AdminArticlesContainer';
import AdminCategoriesContainer from '../../containers/AdminCategoriesContainer';
import Categories from './Categories';
import Comments from './Comments';
import Users from './Users';
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
        <div className='admin--status-menu'>
          <StatusBar logOut={this.onLogOut} history={this.props.history} />
        </div>
        <div className='admin--nav-menu'>
          <LeftNavBar />
        </div>
        <div className='admin--main'>
          <Switch>
            <Route exact path={path} component={Home} />
            <Route path={`${path}/pages`} component={Pages} />
            <Route
              path={`${path}/articles`}
              component={AdminArticlesContainer}
            />
            <Route
              path={`${path}/categories`}
              component={AdminCategoriesContainer}
            />
            <Route path={`${path}/comments`} component={Comments} />
            <Route path={`${path}/users`} component={Users} />
            <Route component={Error404} />>
          </Switch>
        </div>
      </>
    );
  }
}
