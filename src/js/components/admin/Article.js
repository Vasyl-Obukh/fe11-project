import React, { Component } from 'react';
import Modal, { handleShow, handleHide, onOutsideClick } from '../Modal';
import ArticleShort from './ArticleShort';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNew: this.props.new ? this.props.new : false,
      showModal: false,
      title: this.props.article ? this.props.article.title : '',
      text: this.props.article ? this.props.article.text : '',
      overview: this.props.article ? this.props.article.overview : '',
      thumbnailUrl: this.props.article ? this.props.article.thumbnailUrl : '',
      categoriesId: this.props.article ? this.props.article.categoriesId : []
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
    const { categoriesId } = this.state;
    let index;

    if (e.target.checked) {
      categoriesId.push(e.target.value);
    } else {
      index = categoriesId.indexOf(e.target.value);
      categoriesId.splice(index, 1);
    }
    this.setState({categoriesId})
  };

  onSubmit = e => {
    e.preventDefault();
    this.state.addNew
      ? this.props.addArticle({
          title: this.state.title,
          text: this.state.text,
          overview: this.state.overview,
          thumbnailUrl: this.state.thumbnailUrl,
          categoriesId: this.state.categoriesId
        })
      : this.props.changeArticle({
          id: this.props.article.id,
          title: this.state.title,
          text: this.state.text,
          overview: this.state.overview,
          thumbnailUrl: this.state.thumbnailUrl,
          categoriesId: this.state.categoriesId
        });
    this.handleHide();
  };

  render() {
    return (
      <>
        {this.state.addNew ? (
          <div className='item-new'>
            <button className='item-new__add' onClick={this.handleShow}>
              &#43; Add article
            </button>
          </div>
        ) : (
          <ArticleShort
            article={this.props.article}
            handleShow={this.handleShow}
            categories={this.props.categories
              .filter(category =>
                this.props.article.categoriesId.includes(category.id)
              )
              .map(category => category.name)}
            deleteArticle={this.props.deleteArticle}
          />
        )}
        {this.state.showModal ? (
          <Modal
            onOutsideClick={this.onOutsideClick}
            handleHide={this.handleHide}
          >
            <form className='admin-modal' onSubmit={this.onSubmit}>
              <div className='admin-modal__item'>
                <label className='admin-modal__label' htmlFor='title'>
                  Title
                </label>
                <input
                  className='admin-modal__text'
                  type='text'
                  id='title'
                  value={this.state.title}
                  onChange={e => this.setState({ title: e.target.value })}
                  placeholder={"Type the article's title..."}
                  autoComplete='off'
                  required
                />
              </div>
              <div className='admin-modal__item'>
                <label className='admin-modal__label' htmlFor='text'>
                  Text
                </label>
                <textarea
                  className='admin-modal__textarea admin-modal__textarea_lg'
                  id='text'
                  value={this.state.text}
                  onChange={e => this.setState({ text: e.target.value })}
                  placeholder={"Type the article's text..."}
                  required
                />
              </div>
              <div className='admin-modal__item'>
                <label className='admin-modal__label' htmlFor='overview'>
                  Overview
                </label>
                <textarea
                  className='admin-modal__textarea'
                  id='overview'
                  maxLength='200'
                  value={this.state.overview}
                  onChange={e =>
                    this.setState({ overview: e.target.value })
                  }
                  placeholder={"Type the article's overview..."}
                  required
                />
              </div>
              <div className='admin-modal__thumb'>
                {this.state.thumbnailUrl !== '' ? (
                  <div
                    className='admin-modal__img'
                    style={{
                      backgroundImage: `url(${this.state.thumbnailUrl})`
                    }}
                  />
                ) : (
                  'You need to choose thumbnail'
                )}
              </div>
              <div className='settings__file-select file-select'>
                <label className='file-select__btn' htmlFor='thumb'>
                  Select file
                </label>
                <input
                  className='file-select__input'
                  id='thumb'
                  type='file'
                  accept='image/*'
                  onChange={this.onFileLoad}
                  multiple
                  required={
                    this.state.thumbnailUrl === '' ? 'required' : null
                  }
                />
              </div>
              <ul className='admin-modal__categories'>
                {this.props.categories.map(category => (
                  <li key={category.id} className='admin-modal__category'>
                    <input
                      id={category.id}
                      type='checkbox'
                      defaultChecked={this.state.categoriesId.includes(
                        category.id
                      )}
                      onChange={this.onCheck}
                      value={category.id}
                    />
                    <label htmlFor={category.id}>{category.name}</label>
                  </li>
                ))}
              </ul>
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
