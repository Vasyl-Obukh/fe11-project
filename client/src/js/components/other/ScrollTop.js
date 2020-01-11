import React, { Component } from 'react';

export default class ScrollTop extends Component {
  constructor(props) {
    super(props);
    this.distance = 200;
    this.state = {
      show: false
    };
  }

  componentDidMount = () => {
    this.checkForScroll();
    window.addEventListener('scroll', this.checkForScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.checkForScroll);
  }

  checkForScroll = () => {
    this.setState({
      show: document.documentElement.scrollTop > this.distance ? true : false
    });
  };

  render() {
    return this.state.show ? (
      <i
        className='fas fa-arrow-up scroll-top'
        onClick={() => window.scrollTo(0, 0)}
      />
    ) : null;
  }
}
