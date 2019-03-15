import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AdminPanel from './AdminPanel';
import PostPage from './PostPage';
import Error404 from './Error404';
import '../../sass/style.sass';

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/post' component={PostPage} />
      <Route path='/admin' component={AdminPanel} />
      <Route component={Error404} />
    </Switch>
  );
}
