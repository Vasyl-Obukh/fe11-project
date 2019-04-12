import React from 'react';

export default function Home({
  articlesNumber,
  categoriesNumber,
  usersNumber,
  commentsNumber
}) {
  return (
    <div>
      <ul>
        <li>
          Number of articles: <span>{articlesNumber}</span>
        </li>
        <li>
          Number of categories: <span>{categoriesNumber}</span>
        </li>
        <li>
          Number of users: <span>{usersNumber}</span>
        </li>
        <li>
          Number of validated comments: <span>{commentsNumber}</span>
        </li>
      </ul>
    </div>
  );
}
