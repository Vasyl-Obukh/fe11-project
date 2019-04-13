import React from 'react';
import {withRouter} from 'react-router-dom';

function Search(props) {
  let query;
  const onSubmit = e => {
    e.preventDefault();
    props.history.push(`/search?query=${query.value}`);
  };
  return (
    <div className='search'>
      <form onSubmit={onSubmit}>
        <input className='search__field' type='text' placeholder='search...' ref={node => (query = node)} required></input>
        <i className='fas fa-search search__icon'></i>
      </form>
    </div>
  );
}

export default withRouter(Search);
