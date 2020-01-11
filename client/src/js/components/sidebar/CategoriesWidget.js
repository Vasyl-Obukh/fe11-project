import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import paths from '../../constants/paths';

const CategoriesWidget = ({ categories = [] }) => {
  return (
    <div className='widget-categories'>
      <h3 className='widget-categories__title'>Categories</h3>
      <ul className='widget-categories__list'>
        {categories.map(({ id, name }) => (
          <li key={id} className='widget-categories__item'>
            <NavLink to={paths.CATEGORY_FIRST_PAGE.replace(/:\w*$/, name)}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

CategoriesWidget.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    })
  )
};

export default CategoriesWidget;
