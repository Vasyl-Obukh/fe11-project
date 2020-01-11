import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PageTemplate from '../PageTemplate';
import Articles from '../../containers/Articles';
import paths from '../../constants/paths';

export default function CategoryPage() {
  return (
    <PageTemplate>
      <Switch>
        <Route exact path={paths.CATEGORY_FIRST_PAGE} component={Articles} />
        <Redirect
          exact
          from={paths.CATEGORY_N_PAGE.replace(/:\w*$/, 1)}
          to={paths.CATEGORY_FIRST_PAGE}
        />
        <Route path={paths.CATEGORY_N_PAGE} component={Articles} />
      </Switch>
    </PageTemplate>
  );
}
