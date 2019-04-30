import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <ul className='breadcrumbs'>
      {breadcrumbs.map((_, id) => (
        <li
          className={`breadcrumbs__item breadcrumbs__item_${
            _.last ? 'current' : 'change'
          }`}
          key={id}
        >
          {_.last ? <span>{_.name}</span> : <Link to={_.url}>{_.name}</Link>}
        </li>
      ))}
    </ul>
  );
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      last: PropTypes.bool
    })
  )
};
