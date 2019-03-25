import React, { Component } from 'react';
import Modal from '../Modal';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModale: false
    };
  }

  render() {
    return (
      <>
        <h3>Article</h3>
        {this.state.showModale ? <Modal>Change Article</Modal> : null}
      </>
    );
  }
}
