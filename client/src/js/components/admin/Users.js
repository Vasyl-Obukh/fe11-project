import React, { Component } from 'react';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('/api/users')
      .then(users => users.json())
      .then(users => {
        this.setState({ users });
      });
  }

  render() {
    const { users } = this.state;
    return users.length ? (
      <ul className='users-list'>
        {users.map(_ => (
          <li key={_._id} className='users-list__item'>
            <span className='users-list__name'>{_.name}</span>
            <span className='users-list__email'>{_.email}</span>
          </li>
        ))}
      </ul>
    ) : (
      <h3 className='absence'>{'There\'s no users here yet'}</h3>
    );
  }
}
