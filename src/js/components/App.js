import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanelContainer from '../containers/AdminPanelContainer';
import ArticlePageContainer from '../containers/ArticlePageContainer';
import CategoryPage from './pages/CategoryPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Error404 from './pages/Error404';
import '../../sass/app.sass';

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Redirect exact from='/page-1' to='/' />
      <Route path='/page-:number' component={Home} />
      <Route path='/admin' component={AdminPanelContainer} />
      <Redirect exact from='/articles' to='/' />
      <Route path='/articles/:articleId' component={ArticlePageContainer} />
      <Redirect exact from='/categories' to='/' />
      <Route path='/categories/:categoryName' component={CategoryPage} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/contact-us' component={ContactUs} />
      <Route component={Error404} />
    </Switch>
  );
}
