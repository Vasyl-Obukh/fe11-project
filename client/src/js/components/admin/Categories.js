import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

export default class Categories extends Component {
  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = () => {
    fetch('/api/categories')
      .then(categories => categories.json())
      .then(categories => {
        this.props.setCategories(categories);
      });
  };

  render() {
    const {
      categories = [],
      addCategory,
      deleteCategory,
      changeCategory
    } = this.props;

    return (
      <div className='admin-categories'>
        <Category addCategory={addCategory} new={true} fetchCategories={this.fetchCategories} />
        <ul className='list-head list-head_categories'>
          <li className='list-head__item'>Category name</li>
          <li className='list-head__item'>Edit</li>
        </ul>
        {categories.length ? (
          <ul className='admin-list'>
            {categories.map(_ => (
              <li key={_._id} className='list-item list-item_categories'>
                <Category
                  category={_}
                  deleteCategory={() => deleteCategory(_._id)}
                  changeCategory={changeCategory}
                  fetchCategories={this.fetchCategories}
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
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  addCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  changeCategory: PropTypes.func.isRequired,
  setCategories: PropTypes.func.isRequired,
};
