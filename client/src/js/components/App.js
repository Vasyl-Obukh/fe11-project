import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from '../containers/AdminPanel';
import ArticlePage from '../containers/ArticlePage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import AboutUs from '../containers/AboutUs';
import ContactUs from '../containers/ContactUs';
import Error404 from './pages/Error404';
import paths from '../constants/paths';
import '../../sass/app.sass';

export default function App() {
  return (
    <Switch>
      <Route exact path={paths.MAIN_FIRST_PAGE} component={Home} />
      <Redirect
        exact
        from={paths.MAIN_N_PAGE.replace(/:\w*$/, '1')}
        to={paths.MAIN_FIRST_PAGE}
      />
      <Route path={paths.MAIN_N_PAGE} component={Home} />
      <Route path={paths.ADMIN_PANEL} component={AdminPanel} />
      <Redirect
        exact
        from={paths.ARTICLE_PAGE.replace(/:\w*/, '')}
        to={paths.MAIN_FIRST_PAGE}
      />
      <Route path={paths.ARTICLE_PAGE} component={ArticlePage} />
      <Redirect
        exact
        from={paths.CATEGORY_FIRST_PAGE.replace(/:\w*/, '')}
        to={paths.MAIN_FIRST_PAGE}
      />
      <Route path={paths.CATEGORY_FIRST_PAGE} component={CategoryPage} />
      <Route exact path={paths.SEARCH_FIRST_PAGE} component={SearchPage} />
      <Route path={paths.SEARCH_N_PAGE} component={SearchPage} />
      <Route path={paths.ABOUT_US} component={AboutUs} />
      <Route path={paths.CONTACT_US} component={ContactUs} />
      <Route path={paths.ERROR_404} component={Error404} />
      <Redirect to={paths.ERROR_404} />
    </Switch>
  );
}
