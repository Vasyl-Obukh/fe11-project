import React from 'react';

export default function Search() {
  return (
    <div className='search'>
      <form>
        <input type='text' placeholder='search...'></input>
        <i className='fas fa-search'></i>
      </form>
    </div>
  );
}
