import React from 'react';
import PageTemplate from '../PageTemplate';
import VisibleArticles from '../../containers/VisibleArticles';
import { Route, Redirect, Switch } from 'react-router-dom';
import ArticlesContainer from '../../containers/ArticlesContainer';

export default function CategoryPage(props) {
  return (
    <PageTemplate>
      <Switch>
        <Route exact path={props.match.path} component={ArticlesContainer} />
        <Redirect
          exact
          from={`${props.match.path}/page-1`}
          to={props.match.path}
        />
        <Route
          path={`${props.match.path}/page-:number`}
          component={ArticlesContainer}
        />
      </Switch>
    </PageTemplate>
  );
}
