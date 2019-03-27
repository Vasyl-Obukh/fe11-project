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
      {categories.map(category => (
        <Category
          key={category.id}
          category={category}
          categories={categories}
          deleteCategory={() => deleteCategory(category.id)}
          changeCategory={changeCategory}
        />
      ))}
    </div>
  );
}
