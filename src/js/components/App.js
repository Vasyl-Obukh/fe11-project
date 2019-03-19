import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AdminPanel from './AdminPanel';
import CategoryPage from './CategoryPage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import ArticlePage from './ArticlePage';
import Error404 from './Error404';
import '../../sass/app.sass';

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/articles/:articleId' component={ArticlePage} />
      <Route path='/categories/:categoryName' component={CategoryPage} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/contact-us' component={ContactUs} />
      <Route path='/admin' component={AdminPanel} />
      <Route component={Error404} />
    </Switch>
  );
}
