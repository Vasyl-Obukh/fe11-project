import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoriesWidget = ({ categories }) => {
  return (
    <div className='widget-categories'>
      <h3 className='widget-categories__title'>Categories</h3>
      <ul className='widget-categories__list'>
        {categories.map(({ id, name }) => (
          <li key={id} className='widget-categories__item'>
            <NavLink to={`/categories/${name}`}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesWidget;
