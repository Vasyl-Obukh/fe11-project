import React, { Component } from 'react';
import Modal, { handleShow, handleHide, onOutsideClick } from '../Modal';
import { Link } from 'react-router-dom';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNew: this.props.new ? this.props.new : false,
      showModal: false,
      name: this.props.category ? this.props.category.name : '',
      error: false
    };
    this.message = 'Do you wanna delete this category?';
    this.handleShow = handleShow.bind(this);
    this.handleHide = handleHide.bind(this);
    this.onOutsideClick = onOutsideClick.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.props.categories.some(_ => _.name === this.state.name)) {
      this.setState({ error: true })
    } else {
      this.state.addNew
        ? this.props.addCategory(this.state.name)
        : this.props.changeCategory({
            id: this.props.category.id,
            name: this.state.name
          });
      this.handleHide();
    }
  };

  onDelete = e => confirm(this.message) ? this.props.deleteCategory(e) : null;

  render() {
    return (
      <>
        {this.state.addNew ? (
          <div className='item-new'>
            <button className='item-new__add' onClick={this.handleShow}>
              &#43; Add category
            </button>
          </div>
        ) : (
          <li className='list-item list-item_categories'>
            <div className='list-item__category'>
              <Link
                className='list-item__link'
                to={`/categories/${this.props.category.name}`}
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
          </li>
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
                  className='admin-modal__text admin-modal__text_category'
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                  placeholder='Type the category name...'
                  autoComplete='off'
                  required
                />
              </div>

              {this.state.error ? <p>This category name is taken</p> : null}
              <button className='submit' type='submit'>
                Submit
              </button>
            </form>
          </Modal>
        ) : null}
      </>
    );
  }
}
