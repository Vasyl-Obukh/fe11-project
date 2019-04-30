import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal, { handleShow, handleHide, onOutsideClick } from '../Modal';
import ArticleShort from './ArticleShort';
import InputError from '../../InputError';

export default class Article extends Component {
  constructor(props) {
    super(props);
    const { article } = this.props;
    this.state = {
      addNew: this.props.new ? true : false,
      showModal: false,
      title: article ? article.title : '',
      text: article ? article.text : '',
      overview: article ? article.overview : '',
      thumbnailUrl: article ? article.thumbnailUrl : '',
      categoriesId: article ? article.categoriesId : [],
      error: ''
    };
    this.handleShow = handleShow.bind(this);
    this.handleHide = handleHide.bind(this);
    this.onOutsideClick = onOutsideClick.bind(this);
  }

  onFileLoad = e => {
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ thumbnailUrl: reader.result, error: '' });
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
    this.setState({ categoriesId });
  };

  onSubmit = e => {
    e.preventDefault();
    const { thumbnailUrl, categoriesId, addNew } = this.state;
    const title = this.state.title.trim();
    const text = this.state.text.trim();
    const overview = this.state.overview.trim();

    try {
      if (!title || !text || !overview) {
        throw new InputError('You need to fill up all fields');
      }
      if (!thumbnailUrl) {
        throw new InputError('You need to choose thumbnail');
      }
      if (addNew) {
        this.props.addArticle({
          title,
          text,
          overview,
          thumbnailUrl,
          categoriesId
        });
        this.setState({
          title: '',
          text: '',
          overview: '',
          thumbnailUrl: '',
          categoriesId: []
        });
      } else {
        this.props.changeArticle({
          id: this.props.article.id,
          title,
          text,
          overview,
          thumbnailUrl,
          categoriesId
        });
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

  render() {
    const {
      state: {
        addNew,
        showModal,
        title,
        text,
        overview,
        thumbnailUrl,
        categoriesId,
        error
      },
      props: { article, categories, deleteArticle }
    } = this;

    return (
      <>
        {addNew ? (
          <div className='item-new'>
            <button className='item-new__add' onClick={this.handleShow}>
              &#43; Add article
            </button>
          </div>
        ) : (
          <ArticleShort
            article={article}
            handleShow={this.handleShow}
            deleteArticle={deleteArticle}
          />
        )}
        {showModal ? (
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
                  maxLength='100'
                  value={title}
                  onChange={e =>
                    this.setState({
                      title: e.target.value.trimLeft(),
                      error: ''
                    })
                  }
                  placeholder={"Type the article's title..."}
                  autoComplete='off'
                />
              </div>
              <div className='admin-modal__item'>
                <label className='admin-modal__label' htmlFor='text'>
                  Text
                </label>
                <textarea
                  className='admin-modal__textarea admin-modal__textarea_lg'
                  id='text'
                  value={text}
                  onChange={e =>
                    this.setState({
                      text: e.target.value.trimLeft(),
                      error: ''
                    })
                  }
                  placeholder={"Type the article's text..."}
                />
              </div>
              <div className='admin-modal__item'>
                <label className='admin-modal__label' htmlFor='overview'>
                  Overview
                </label>
                <textarea
                  className='admin-modal__textarea'
                  id='overview'
                  maxLength='300'
                  value={overview}
                  onChange={e =>
                    this.setState({
                      overview: e.target.value.trimLeft(),
                      error: ''
                    })
                  }
                  placeholder={"Type the article's overview..."}
                />
              </div>
              {thumbnailUrl ? (
                <div className='admin-modal__thumb'>
                  <div
                    className='admin-modal__img'
                    style={{
                      backgroundImage: `url(${thumbnailUrl})`
                    }}
                  />
                </div>
              ) : null}
              <div className='settings__file-select file-select'>
                <label className='file-select__btn' htmlFor='thumb'>
                  Choose thumbnail
                </label>
                <input
                  className='file-select__input'
                  id='thumb'
                  type='file'
                  accept='image/*'
                  onChange={e => (
                    this.onFileLoad(e), this.setState({ error: '' })
                  )}
                />
              </div>
              <h3>Choose categories (up to 3)</h3>
              {categories.length ? (
                <ul className='admin-modal__categories'>
                  {categories.map(_ => (
                    <li key={_.id} className='admin-modal__category'>
                      <input
                        id={_.id}
                        type='checkbox'
                        disabled={
                          categoriesId.length > 2 &&
                          !categoriesId.includes(_.id)
                        }
                        defaultChecked={categoriesId.includes(_.id)}
                        onChange={this.onCheck}
                        value={_.id}
                      />
                      <label htmlFor={_.id}>{_.name}</label>
                    </li>
                  ))}
                </ul>
              ) : null}
              {error ? <p>{error}</p> : null}
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

Article.propTypes = {
  article: PropTypes.object,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  new: PropTypes.bool,
  addArticle: PropTypes.func,
  changeArticle: PropTypes.func,
  deleteArticle: PropTypes.func
};
