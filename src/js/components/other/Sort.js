import React from 'react';
import PropTypes from 'prop-types';
import sortTypes from '../../constants/sortTypes';

export default function Sort(props) {
  const { sortType, changeSortType } = props;
  const { LATEST, FIRSTS, POPULAR } = sortTypes;
  return (
    <div className='sort'>
      <span className='sort__text'>Sort by</span>
      <div className='sort__types'>
        <span
          className={`sort__type sort__type_${
            sortType === LATEST ? 'current' : 'change'
          }`}
          onClick={() =>
            sortType !== LATEST ? changeSortType(LATEST) : null
          }
        >
          {LATEST}
        </span>
        <span
          className={`sort__type sort__type_${
            sortType === FIRSTS ? 'current' : 'change'
          }`}
          onClick={() =>
            sortType !== FIRSTS ? changeSortType(FIRSTS) : null
          }
        >
          {FIRSTS}
        </span>
        <span
          className={`sort__type sort__type_${
            sortType == POPULAR ? 'current' : 'change'
          }`}
          onClick={() =>
            sortType !== POPULAR ? changeSortType(POPULAR) : null
          }
        >
          {POPULAR}
        </span>
      </div>
    </div>
  );
}

Sort.propTypes = {
  sortType: PropTypes.string.isRequired,
  changeSortType: PropTypes.func.isRequired
};
