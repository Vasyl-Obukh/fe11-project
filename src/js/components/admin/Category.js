import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal, { handleShow, handleHide, onOutsideClick } from '../Modal';
import { Link } from 'react-router-dom';
import ButtonAdd from '../other/ButtonAdd';
import Submit from '../other/Submit';
import InputError from '../../InputError';
import paths from '../../constants/paths';

export default class Category extends Component {
  constructor(props) {
    super(props);
    const { category } = this.props;
    this.state = {
      addNew: this.props.new ? true : false,
      showModal: false,
      name: category ? category.name : '',
      error: ''
    };
    this.message = 'Do you wanna delete this category?';
    this.handleShow = handleShow.bind(this);
    this.handleHide = handleHide.bind(this);
    this.onOutsideClick = onOutsideClick.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    const name = this.state.name.trim();

    try {
      if (!name) throw new InputError('You need to fill up all fields');
      if (this.state.addNew) {
        this.props.addCategory(name);
        this.setState({ name: '', error: '' });
      } else {
        this.props.changeCategory({ id: this.props.category.id, name });
      }
      this.handleHide();
    } catch (error) {
      if (error instanceof InputError) {
        this.setState({ error: error.message });
      } else {
        console.log(error);
      }
    }
  };

  onDelete = e => (confirm(this.message) ? this.props.deleteCategory(e) : null);

  render() {
    return (
      <>
        {this.state.addNew ? (
          <ButtonAdd text='category' onClick={this.handleShow} />
        ) : (
          <>
            <div className='list-item__category'>
              <Link
                className='list-item__link'
                to={paths.CATEGORY_FIRST_PAGE.replace(
                  /:\w*$/,
                  this.props.category.name
                )}
              >
                {this.props.category.name}
              </Link>
            </div>
            <div className='list-item__edit' onClick={this.handleShow}>
              <i className='fas fa-edit' />
            </div>
            <span className='list-item__delete' onClick={this.onDelete}>
              &times;
            </span>
          </>
        )}
        {this.state.showModal ? (
          <Modal
            onOutsideClick={this.onOutsideClick}
            handleHide={this.handleHide}
          >
            <form className='admin-modal' onSubmit={this.onSubmit}>
              <div className='admin-modal__item'>
                <label className='admin-modal__label' htmlFor='name'>
                  Category name
                </label>
                <input
                  type='text'
                  id='name'
                  maxLength='15'
                  className='admin-modal__text admin-modal__text_category'
                  value={this.state.name}
                  onChange={e =>
                    this.setState({
                      name: e.target.value.trimLeft(),
                      error: ''
                    })
                  }
                  placeholder='Type the category name...'
                  autoComplete='off'
                />
              </div>

              {this.state.error ? <p className='error'>{this.state.error}</p> : null}
              <Submit className='admin-modal__btn' />
            </form>
          </Modal>
        ) : null}
      </>
    );
  }
}

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  new: PropTypes.bool,
  addCategory: PropTypes.func,
  changeCategory: PropTypes.func,
  deleteCategory: PropTypes.func
};
