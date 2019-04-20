import React from 'react';
import Category from './Category';

export default function Categories({
  categories,
  addCategory,
  deleteCategory,
  changeCategory
}) {
  return (
    <div className='admin-categories'>
      <Category
        addCategory={addCategory}
        categories={categories}
        new={true}
      />
      <ul className='list-head list-head_categories'>
        <li className='list-head__item'>Category name</li>
        <li className='list-head__item'>Edit</li>
      </ul>
      <ul className='admin-list'>
        {categories.map(category => (
          <Category
            key={category.id}
            category={category}
            categories={categories}
            deleteCategory={() => deleteCategory(category.id)}
            changeCategory={changeCategory}
          />
        ))}
      </ul>
    </div>
  );
}
