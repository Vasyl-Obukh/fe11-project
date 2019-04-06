import React from 'react';
import sortTypes from '../constants/sortTypes';

export default function Sort(props) {
  const { sortType, changeSortType } = props;
  return (
    <div>
      <label htmlFor='sort'>Sort by</label>
      <select
        id='sort'
        name='select'
        value={sortType}
        onChange={({ target: { value } }) => changeSortType(value)}
      >
        <option value={sortTypes.LATEST}>{sortTypes.LATEST}</option>
        <option value={sortTypes.FIRSTS}>{sortTypes.FIRSTS}</option>
        <option value={sortTypes.POPULAR}>{sortTypes.POPULAR}</option>
      </select>
    </div>
  );
}
