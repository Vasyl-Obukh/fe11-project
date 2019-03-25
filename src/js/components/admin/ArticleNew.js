import React, { Component } from 'react';
import Modal from '../Modal';

export default class ArticleNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModale: false,
      title: '',
      text: '',
      overview: '',
      thumbnailUrl: '',
      category: []
    };
  }

  onFileLoad = e => {
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ thumbnailUrl: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  handleShow = () => {
    this.setState({ showModale: true });
  };

  handleHide = () => {
    this.setState({ showModale: false });
  };

  onOutsideClick = e => {
    e.target.getAttribute('class') === 'modal-wrapper'
      ? this.handleHide()
      : null;
  };

  onCheck = e => {
    const { category } = this.state;
    let index;

    if (e.target.checked) {
      category.push(e.target.value)
    } else {
      index = category.indexOf(e.target.value)
      category.splice(index, 1)
    }
    this.setState({ category })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addArticle({
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
      <div className='article-add'>
        <button onClick={this.handleShow}>&#43; Add article</button>
        {this.state.showModale ? (
          <Modal>
            <div className='modal-wrapper' onClick={this.onOutsideClick}>
              <div className='modal modal-article'>
                <button className='modal--close' onClick={this.handleHide}>
                  &times;
                </button>
                <form className='modal--form' onSubmit={this.onSubmit}>
                  <label htmlFor='title'>Title</label>
                  <input
                    type='text'
                    id='title'
                    onChange={e => this.setState({ title: e.target.value })}
                    placeholder='Enter article title'
                    autoComplete='off'
                    required
                  />
                  <label htmlFor='text'>Article text</label>
                  <textarea
                    id='text'
                    onChange={e => this.setState({ text: e.target.value })}
                    rows='12'
                    placeholder='Enter article text'
                    required
                  />
                  <label htmlFor='overview'>Article overview</label>
                  <textarea
                    id='overview'
                    maxLength='400'
                    onChange={e =>
                      this.setState({ overview: e.target.value })
                    }
                    rows='3'
                    placeholder='Enter article overview'
                    required
                  />
                  <input
                    type='file'
                    accept='image/*'
                    onChange={this.onFileLoad}
                    required
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
                      <input type='checkbox' name='categories[]' onChange={this.onCheck} value={_.name} />
                    </label>
                  ))}
                  <button type='submit'>Submit</button>
                </form>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}
