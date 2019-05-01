import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

export default function Categories({
  categories = [],
  addCategory,
  deleteCategory,
  changeCategory
}) {
  return (
    <div className='admin-categories'>
      <Category addCategory={addCategory} new={true} />
      <ul className='list-head list-head_categories'>
        <li className='list-head__item'>Category name</li>
        <li className='list-head__item'>Edit</li>
      </ul>
      {categories.length ? (
        <ul className='admin-list'>
          {categories.map(_ => (
            <li key={_.id} className='list-item list-item_categories'>
              <Category
                category={_}
                deleteCategory={() => deleteCategory(_.id)}
                changeCategory={changeCategory}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h3 className='absence'>{'There\'s no categories here yet'}</h3>
      )}
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  addCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  changeCategory: PropTypes.func.isRequired
};
