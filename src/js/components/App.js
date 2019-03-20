import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './admin-panel/AdminPanel';
import SignPage from './pages/SignPage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Error404 from './pages/Error404';
import '../../sass/app.sass';

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/articles/:articleId' component={ArticlePage} />
      <Route path='/categories/:categoryName' component={CategoryPage} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/contact-us' component={ContactUs} />
      <Route path='/sign' component={SignPage}/>
      <Route path='/admin' component={AdminPanel} />
      <Route component={Error404} />
    </Switch>
  );
}
