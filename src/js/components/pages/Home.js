import React, { Component } from 'react';
import PageTemplate from '../PageTemplate';
import ArticlesContainer from '../../containers/ArticlesContainer';
import Sort from '../Sort';
import sortTypes from '../../constants/sortTypes';
import paths from '../../constants/paths';

export default class Home extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    const {path, url} = props.match;
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
    this.setState({sortType});
  }

  render() {
    return (
      <PageTemplate>
        <Sort
          sortType={this.state.sortType}
          onChange={this.onSortTypeChange}
          urlTemplate={this.urlTemplate}
        />
        <ArticlesContainer sortType={this.state.sortType} urlTemplate={this.urlTemplate} />
      </PageTemplate>
    );
  }
}
