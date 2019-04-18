import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/search?query=${this.state.query}`);
    this.setState({query: ''});
  };

  render() {
    return (
      <form className='search' onSubmit={this.onSubmit}>
        <input
          className='search__field'
          type='text'
          placeholder='search...'
          value={this.state.query}
          onChange={({ target: { value } }) => this.setState({ query: value })}
          required
        />
        <i className='fas fa-search search__icon' />
      </form>
    );
  }
}

export default withRouter(Search);
