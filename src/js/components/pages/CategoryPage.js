import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PageTemplate from '../PageTemplate';
import ArticlesContainer from '../../containers/ArticlesContainer';
import paths from '../../constants/paths';

export default function CategoryPage() {
  return (
    <PageTemplate>
      <Switch>
        <Route
          exact
          path={paths.CATEGORY_FIRST_PAGE}
          component={ArticlesContainer}
        />
        <Redirect
          exact
          from={`${paths.CATEGORY_N_PAGE.split(':')
            .slice(0, 2)
            .join(':')}1`}
          to={paths.CATEGORY_FIRST_PAGE}
        />
        <Route path={paths.CATEGORY_N_PAGE} component={ArticlesContainer} />
      </Switch>
    </PageTemplate>
  );
}
