import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import paths from '../../constants/paths';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.state.query) {
      this.props.history.push(
        `${paths.SEARCH_FIRST_PAGE}?query=${this.state.query}`
      );
      this.setState({ query: '' });
    }
  };

  render() {
    return (
      <form className='search' onSubmit={this.onSubmit}>
        <input
          className='search__field'
          type='text'
          placeholder='search...'
          value={this.state.query}
          onChange={({ target: { value } }) =>
            this.setState({ query: value.trimLeft() })
          }
        />
        <i className='fas fa-search search__icon' />
      </form>
    );
  }
}

export default withRouter(Search);
