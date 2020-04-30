import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersNumber: 0
    };
  }

  async componentDidMount() {
    fetch('/api/users')
      .then(users => users.json())
      .then(users => {
        this.setState({ usersNumber: users.length });
      });
  }

  render() {
    const {
      articlesNumber,
      categoriesNumber,
      commentsNumber,
    } = this.props;
    const { usersNumber } = this.state;

    return (
      <ul className='statistic'>
        <li className='statistic__item'>
          Number of articles:
          <span className='statistic__value'>{articlesNumber}</span>
        </li>
        <li className='statistic__item'>
          Number of categories:
          <span className='statistic__value'>{categoriesNumber}</span>
        </li>
        <li className='statistic__item'>
          Number of users: <span className='statistic__value'>{usersNumber}</span>
        </li>
        <li className='statistic__item'>
          Number of comments:
          <span className='statistic__value'>{commentsNumber}</span>
        </li>
      </ul>
    );
  }
}

Home.propTypes = {
  articlesNumber: PropTypes.number.isRequired,
  categoriesNumber: PropTypes.number.isRequired,
  commentsNumber: PropTypes.number.isRequired
};
