import React, { Component } from 'react';

export default class Setings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gitHub: this.props.socialLinks.gitHub || '',
      facebook: this.props.socialLinks.facebook || '',
      linkedIn: this.props.socialLinks.linkedIn || '',
      twitter: this.props.socialLinks.twitter || '',
      pageLimit: this.props.pageLimit || '',
      pageNeighbours: this.props.pageNeighbours || '',
      slidesNumber: this.props.slidesNumber || '',
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
        this.setState({ gallery: [...this.state.gallery, reader.result ]});
      };
      reader.readAsDataURL(img);
    }
  };

  onGeneralSubmit = e => {
    e.preventDefault();
    const { gallery, text, gitHub, facebook, linkedIn, twitter, ...settings } = this.state;
    const socialLinks = {gitHub, facebook, linkedIn, twitter};
    this.props.changeSettings({...settings, socialLinks});
  }

  onAboutSubmit = e => {
    e.preventDefault();
    const { gallery, text } = this.state;
    this.props.changeContent({gallery, text});
  }

  deletePhoto = id => {
    //console.log(id);
    //const a = [...this.state.gallery].splice(id, 1);
    this.setState({
      gallery: this.state.gallery.filter((_, i) => i !== id)
    })
  }

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
        <div className='general'>
          <form onSubmit={this.onGeneralSubmit}>
            <label htmlFor='github'>Github</label>
            <input
              type='text'
              id='github'
              value={gitHub}
              onChange={e => this.setState({ gitHub: e.target.value })}
            />
            <label htmlFor='facebook'>Facebook</label>
            <input
              type='text'
              id='facebook'
              value={facebook}
              onChange={e => this.setState({ facebook: e.target.value })}
            />
            <label htmlFor='linkedIn'>Linked in</label>
            <input
              type='text'
              id='linkedIn'
              value={linkedIn}
              onChange={e => this.setState({ linkedIn: e.target.value })}
            />
            <label htmlFor='twitter'>Twitter</label>
            <input
              type='text'
              id='twitter'
              value={twitter}
              onChange={e => this.setState({ twitter: e.target.value })}
            />
            <label htmlFor='pageLimit'>Articles per page</label>
            <input
              type='number'
              min='1'
              max='10'
              id='pageLimit'
              value={pageLimit}
              onChange={e => this.setState({ pageLimit: e.target.value })}
            />
            <label htmlFor='pageNeighbours'>Page neighbours</label>
            <input
              type='number'
              min='1'
              max='2'
              id='pageNeighbours'
              value={pageNeighbours}
              onChange={e =>
                this.setState({ pageNeighbours: e.target.value })
              }
            />
            <label htmlFor='slidesNumber'>Slides number</label>
            <input
              type='number'
              min='2'
              max='10'
              id='slidesNumber'
              value={slidesNumber}
              onChange={e =>
                this.setState({ slidesNumber: e.target.value })
              }
            />
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              id='address'
              value={address}
              onChange={e => this.setState({ address: e.target.value })}
            />
            <label htmlFor='phoneNumber'>Phone number</label>
            <input
              type='text'
              id='phoneNumber'
              value={phoneNumber}
              onChange={e => this.setState({ phoneNumber: e.target.value })}
            />
            <label htmlFor='copyright'>Copyright</label>
            <input
              type='text'
              id='copyright'
              value={copyright}
              onChange={e => this.setState({ copyright: e.target.value })}
            />
            <button type='submit'>Submit</button>
          </form>

          <form onSubmit={this.onAboutSubmit}>
            <input
              type='file'
              accept='image/*'
              onChange={this.onFileLoad}
              multiple
            />
            {gallery.map((_, id) =>
              <div role='img' key={id} onClick={() => this.deletePhoto(id)} style={{backgroundImage: `url('${_}')`, width: '300px', height: '160px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: '#ccc' , display:'inline-block'}}></div>
            )}
            <textarea value={text} onChange={e => this.setState({text: e.target.value})}></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
        <div />
      </>
    );
  }
}
