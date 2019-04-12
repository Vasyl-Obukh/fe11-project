import React, { Component } from 'react';
import Modal, { handleShow, handleHide, onOutsideClick } from '../Modal';

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
      <div className='admin-category'>
        {this.state.addNew ? (
          <div className='article-add'>
            <button onClick={this.handleShow}>&#43; Add category</button>
          </div>
        ) : (
          <div className='admin-category-container'>
            <p>{this.state.name}</p>
            <div className='edit' onClick={this.handleShow}>
              Edit
            </div>
            <button className='article-delete' onClick={this.onDelete}>
              &times;
            </button>
          </div>
        )}
        {this.state.showModal ? (
          <Modal
            onOutsideClick={this.onOutsideClick}
            handleHide={this.handleHide}
          >
            <form className='modal--form' onSubmit={this.onSubmit}>
              <label htmlFor='name'>Category name</label>
              <input
                type='text'
                id='name'
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                placeholder='Enter category name'
                autoComplete='off'
                required
              />
              {this.state.error ? <p>This category name is taken</p> : null}
              <button type='submit'>Submit</button>
            </form>
          </Modal>
        ) : null}
      </div>
    );
  }
}
