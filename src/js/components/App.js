import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanelContainer from '../containers/AdminPanelContainer';
import ArticlePageContainer from '../containers/ArticlePageContainer';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import AboutUsContainer from '../containers/AboutUsContainer';
import ContactUsContainer from '../containers/ContactUsContainer';
import Error404 from './pages/Error404';
import '../../sass/app.sass';
import paths from '../constants/paths';

export default function App() {
  return (
    <Switch>
      <Route exact path={paths.MAIN_FIRST_PAGE} component={Home} />
      <Redirect exact from={`${paths.MAIN_N_PAGE.split(':')[0]}1`} to={paths.MAIN_FIRST_PAGE} />
      <Route path={paths.MAIN_N_PAGE} component={Home} />
      <Route path={paths.ADMIN_PANEL} component={AdminPanelContainer} />
      <Redirect exact from='/articles' to={paths.MAIN_FIRST_PAGE} />
      <Route path='/articles/:articleId' component={ArticlePageContainer} />
      <Redirect exact from={paths.CATEGORY_FIRST_PAGE.split('/:')[0]} to={paths.MAIN_FIRST_PAGE} />
      <Route path={paths.CATEGORY_FIRST_PAGE} component={CategoryPage} />
      <Route exact path='/search' component={SearchPage} />
      <Route path='/search/page-:number' component={SearchPage} />
      <Route path={paths.ABOUT_US} component={AboutUsContainer} />
      <Route path={paths.CONTACT_US} component={ContactUsContainer} />
      <Route path={paths.ERROR_404} component={Error404} />
      <Redirect to={paths.ERROR_404} />
    </Switch>
  );
}
