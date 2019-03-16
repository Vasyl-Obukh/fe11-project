import React from 'react';

const Search = () => {
  return (
    <div className='search'>
      <form>
        <input type='text' placeholder='search...'></input>
        <i className='fas fa-search'></i>
      </form>
    </div>
  );
};

export default Search;
