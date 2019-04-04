import React from 'react';
import sortTypes from '../constants/sortTypes';

export default function Sort(props) {
  const { sortType, onChange } = props;
  return (
    <div>
      <label htmlFor='sort'>Sort by</label>
      <select
        id='sort'
        name='select'
        defaultValue={sortType}
        onChange={e => onChange(e.target.value)}
      >
        <option value={sortTypes.DATE_DOWN}>Newest</option>
        <option value={sortTypes.DATE_UP}>Oldest</option>
        <option value={sortTypes.COMMENTS_NUMBER}>Popular</option>
      </select>
    </div>
  );
}
