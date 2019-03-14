import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PresComponent from '../presentational/PresComponent.jsx';
class Container extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Hello, bro'
    };
  }
  render() {
    return (
      <PresComponent value={this.state.value} />
    );
  }
}
export default Container;

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<Container />, wrapper) : false;