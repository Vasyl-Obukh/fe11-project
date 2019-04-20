import React from 'react';

export default function Home({
  articlesNumber,
  categoriesNumber,
  usersNumber,
  commentsNumber
}) {
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
