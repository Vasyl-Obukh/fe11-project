import React, { Component } from 'react';

export default class Setings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gitHub: this.props.socialLinks.gitHub || '',
      facebook: this.props.socialLinks.facebook || '',
      linkedIn: this.props.socialLinks.linkedIn || '',
      twitter: this.props.socialLinks.twitter || '',
      pageLimit: this.props.pageLimit || 3,
      slidesNumber: this.props.slidesNumber || 5,
      address: this.props.address || '',
      phoneNumber: this.props.phoneNumber || '',
      copyright: this.props.copyright || '',
      gallery: this.props.gallery || [],
      text: this.props.text || ''
    };
  }

  onFileLoad = e => {
    for (let img of e.target.files) {
      let reader = new FileReader();
      reader.onload = () => {
        this.setState({ gallery: [...this.state.gallery, reader.result] });
      };
      reader.readAsDataURL(img);
    }
  };

  onGeneralSubmit = e => {
    e.preventDefault();
    const {
      gallery,
      text,
      gitHub,
      facebook,
      linkedIn,
      twitter,
      ...settings
    } = this.state;
    const socialLinks = { gitHub, facebook, linkedIn, twitter };
    this.props.changeSettings({ ...settings, socialLinks });
  };

  onAboutSubmit = e => {
    e.preventDefault();
    const { gallery, text } = this.state;
    this.props.changeContent({ gallery, text });
  };

  deletePhoto = id => {
    this.setState({
      gallery: this.state.gallery.filter((_, i) => i !== id)
    });
  };

  render() {
    const {
      gitHub,
      facebook,
      linkedIn,
      twitter,
      pageLimit,
      pageNeighbours,
      slidesNumber,
      address,
      phoneNumber,
      copyright,
      gallery,
      text
    } = this.state;
    return (
      <>
        <form
          className='settings settings_general'
          onSubmit={this.onGeneralSubmit}
        >
          <h2 className='settings__title'>General settings</h2>
          <div className='settings__item'>
            <label htmlFor='github'>Github</label>
            <input
              type='text'
              id='github'
              value={gitHub}
              onChange={e => this.setState({ gitHub: e.target.value })}
            />
          </div>
          <div className='settings__item'>
            <label htmlFor='facebook'>Facebook</label>
            <input
              type='text'
              id='facebook'
              value={facebook}
              onChange={e => this.setState({ facebook: e.target.value })}
            />
          </div>
          <div className='settings__item'>
            <label htmlFor='linkedIn'>Linked in</label>
            <input
              type='text'
              id='linkedIn'
              value={linkedIn}
              onChange={e => this.setState({ linkedIn: e.target.value })}
            />
          </div>
          <div className='settings__item'>
            <label htmlFor='twitter'>Twitter</label>
            <input
              type='text'
              id='twitter'
              value={twitter}
              onChange={e => this.setState({ twitter: e.target.value })}
            />
          </div>
          <div className='settings__item'>
            <label htmlFor='pageLimit'>Articles per page</label>
            <input
              type='number'
              min='1'
              max='10'
              id='pageLimit'
              value={pageLimit}
              onChange={e => this.setState({ pageLimit: parseInt(e.target.value) })}
            />
          </div>
          <div className='settings__item'>
            <label htmlFor='slidesNumber'>Slides number</label>
            <input
              type='number'
              min='2'
              max='10'
              id='slidesNumber'
              value={slidesNumber}
              onChange={e =>
                this.setState({ slidesNumber: parseInt(e.target.value) })
              }
            />
          </div>
          <div className='settings__item'>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              id='address'
              value={address}
              onChange={e => this.setState({ address: e.target.value })}
            />
          </div>
          <div className='settings__item'>
            <label htmlFor='phoneNumber'>Phone number</label>
            <input
              type='text'
              id='phoneNumber'
              value={phoneNumber}
              onChange={e => this.setState({ phoneNumber: e.target.value })}
            />
          </div>
          <div className='settings__item'>
            <label htmlFor='copyright'>Copyright</label>
            <input
              type='text'
              id='copyright'
              value={copyright}
              onChange={e => this.setState({ copyright: e.target.value })}
            />
          </div>
          <button className='settings__submit' type='submit'>
            Submit
          </button>
        </form>

        <form
          className='settings settings_info'
          onSubmit={this.onAboutSubmit}
        >
          <h2 className='settings__title'>About us setings</h2>
          <ul className='settings__gallery'>
            {gallery.map((_, id) => (
              <li
                role='img'
                className='settings__img'
                key={id}
                style={{
                  backgroundImage: `url('${_}')`
                }}
              >
                <span
                  className='settings__delete'
                  onClick={() => this.deletePhoto(id)}
                >
                  &times;
                </span>
              </li>
            ))}
          </ul>
          <div className='settings__file-select file-select'>
            <label className='file-select__btn' htmlFor='gallery'>
              Select files
            </label>
            <input
              className='file-select__input'
              id='gallery'
              type='file'
              accept='image/*'
              onChange={this.onFileLoad}
              multiple
            />
          </div>
          <textarea
            className='settings__text settings__text_lg'
            value={text}
            placeholder='Tipe something about you...'
            onChange={e => this.setState({ text: e.target.value })}
          />
          <button className='settings__submit' type='submit'>
            Submit
          </button>
        </form>
      </>
    );
  }
}
