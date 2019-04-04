import React, { Component} from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PageTemplate from '../PageTemplate';
import ArticlesContainer from '../../containers/ArticlesContainer';
import paths from '../../constants/paths';
import Sort from '../Sort';
import sortTypes from '../../constants/sortTypes';

export default class CategoryPage extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    const { path, url } = props.match;
    this.urlTemplate =
      path === paths.CATEGORY_FIRST_PAGE
        ? path.replace(':categoryName', url.split('/')[2])
        : path === paths.CATEGORY_N_PAGE
          ? path
            .replace(':categoryName', url.split('/')[2])
            .split('/')
            .slice(0, -1)
            .join('/')
          : '';
    this.state = {
      sortType: sortTypes.DATE_DOWN
    };
  }

  onSortTypeChange = sortType => {
    //this.props.history.push(`${this.urlTemplate}/page-1`);
    this.setState({ sortType });
  }
  render() {
    return (
      <PageTemplate>
        <Sort
          sortType={this.state.sortType}
          onChange={this.onSortTypeChange}
          urlTemplate={this.urlTemplate}
        />
        <Switch>
          <Route
            exact
            path={paths.CATEGORY_FIRST_PAGE}
            render={() => (
              <ArticlesContainer
                sortType={this.state.sortType}
                urlTemplate={this.urlTemplate}
              />
            )}
          />
          <Redirect
            exact
            from={`${paths.CATEGORY_N_PAGE.split(':')
              .slice(0, 2)
              .join(':')}1`}
            to={paths.CATEGORY_FIRST_PAGE}
          />
          <Route
            path={paths.CATEGORY_N_PAGE}
            component={() => (
              <ArticlesContainer
                sortType={this.state.sortType}
                urlTemplate={this.urlTemplate}
              />
            )}
          />
        </Switch>
      </PageTemplate>
    );
  }
}
