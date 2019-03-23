import React, { Component } from 'react';
import userTypes from '../../constants/userTypes';

export default class AdminPanel extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.userType !== userTypes.ADMIN
      ? this.props.history.push('/')
      : null;
  };

  render() {
    return <h1>Admin panel</h1>;
  }
}
