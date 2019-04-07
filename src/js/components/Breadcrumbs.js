import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs(props) {
  const breadcrumbs = [{name: 'Home', url: '/'}, ...props.breadcrumbs];
  return (
    <div className='breadcrumbs'>
      <ul>
        {breadcrumbs.map((_, id) => (
          <li key={id}>
            {_.last ? <span>{_.name}</span> : <Link to={_.url}>{_.name}</Link>}
          </li>
        ))}
      </ul>
    </div>
  );
}
