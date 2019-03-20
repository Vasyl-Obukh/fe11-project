import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesWidget = ({ categories }) => {
  return (
    <div className="cat-widget">
      <h2 className="cat-widget--title">Categories</h2>
      <ul className="cat-widget--list list">
        {categories.map(({ id, name }) => (
          <li key={id} className="list--item">
            <Link to={`/categories/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesWidget;