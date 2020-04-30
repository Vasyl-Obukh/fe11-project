import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import paths from '../../constants/paths';
import * as actions from '../../actions/categories';

export class Navbar extends Component {
  componentDidMount() {
    fetch('/api/categories')
      .then(categories => categories.json())
      .then(categories => {
        this.props.setCategories(categories);
      });
  }

  render() {
    const { categories } = this.props;

    return (
      <ul className='header__navbar navbar'>
        <li className='navbar__item navbar__item_primary'>
          <Link to={paths.MAIN_FIRST_PAGE}>Home</Link>
        </li>
        <li className='navbar__item navbar__item_primary'>
          <span>Categories</span>
          <ul className='navbar navbar_nested'>
            {categories.map(({ name, _id }) => (
              <li key={_id} className='navbar__item navbar__item_nested'>
                <Link to={paths.CATEGORY_FIRST_PAGE.replace(/:\w*/, _id)}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className='navbar__item navbar__item_primary'>
          <Link to={paths.ABOUT_US}>About us</Link>
        </li>
        <li className='navbar__item navbar__item_primary'>
          <Link to={paths.CONTACT_US}>Contact us</Link>
        </li>
      </ul>
    );
  }
}

Navbar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string
    })
  ),
  setCategories: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  setCategories: categories => dispatch(actions.setCategories(categories)),
});

export default connect(null, mapDispatchToProps)(Navbar);
