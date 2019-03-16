import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AdminPanel from './AdminPanel';
import CategoriesPage from './CategoriesPage';
import Category from './Category';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import PostPage from './PostPage';
import Error404 from './Error404';
import '../../sass/app.sass';

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/post' component={PostPage} />
      <Route path='/categories' component={CategoriesPage} />
      <Route path='/category' component={Category} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/contact-us' component={ContactUs} />
      <Route path='/admin' component={AdminPanel} />
      <Route component={Error404} />
    </Switch>
  );
}
