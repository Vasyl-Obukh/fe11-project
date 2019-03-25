import React, { Component } from 'react';
import Modal, { handleShow, handleHide, onOutsideClick } from '../Modal';
import ArticleShort from './ArticleShort';
//import ModalNew from '../Modal';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: this.props.article.title,
      text: this.props.article.text,
      overview: this.props.article.overview,
      thumbnailUrl: this.props.article.thumbnailUrl,
      category: this.props.article.category
    };
    this.handleShow = handleShow.bind(this);
    this.handleHide = handleHide.bind(this);
    this.onOutsideClick = onOutsideClick.bind(this);
  }

  onFileLoad = e => {
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ thumbnailUrl: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  onCheck = e => {
    const { category } = this.state;
    let index;

    if (e.target.checked) {
      category.push(e.target.value);
    } else {
      index = category.indexOf(e.target.value);
      category.splice(index, 1);
    }
    this.setState({ category });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.changeArticle({
      id: this.props.article.id,
      title: this.state.title,
      text: this.state.text,
      overview: this.state.overview,
      thumbnailUrl: this.state.thumbnailUrl,
      category: this.state.category
    });
    this.handleHide();
  };

  render() {
    return (
      <div className='admin-article'>
        <ArticleShort
          article={this.props.article}
          handleShow={this.handleShow}
          deleteArticle={this.props.deleteArticle}
        />
        {this.state.showModal ? (
          <Modal onOutsideClick={this.onOutsideClick} handleHide={this.handleHide}>
            <form className='modal--form' onSubmit={this.onSubmit}>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                id='title'
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
                placeholder='Enter article title'
                autoComplete='off'
                required
              />
              <label htmlFor='text'>Article text</label>
              <textarea
                id='text'
                value={this.state.text}
                onChange={e => this.setState({ text: e.target.value })}
                rows='12'
                placeholder='Enter article text'
                required
              />
              <label htmlFor='overview'>Article overview</label>
              <textarea
                id='overview'
                maxLength='400'
                value={this.state.overview}
                onChange={e => this.setState({ overview: e.target.value })}
                rows='3'
                placeholder='Enter article overview'
                required
              />
              <input
                type='file'
                accept='image/*'
                onChange={this.onFileLoad}
                required={
                  this.state.thumbnailUrl === '' ? 'required' : null
                }
              />
              {this.state.thumbnailUrl !== '' ? (
                <img
                  className='modal-thumbnail'
                  src={this.state.thumbnailUrl}
                />
              ) : null}
              {this.props.categories.map(_ => (
                <label key={_.id}>
                  {_.name}
                  <input
                    type='checkbox'
                    defaultChecked={this.state.category.includes(_.name)}
                    onChange={this.onCheck}
                    value={_.name}
                  />
                </label>
              ))}
              <button type='submit'>Submit</button>
            </form>
          </Modal>
        ) : null}
      </div>
    );
  }
}
