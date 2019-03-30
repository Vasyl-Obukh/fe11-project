import React from 'react';

export default function MostCommentedWidget({ articles }) {
  return (
    <div className='most-commented-widget'>
      <h3>Most commented</h3>
      <ul>
        {articles.map(article => (
          <li className='commented-item' key={article.id}>
            <div className='thumb'>
              <img src={article.thumbnailUrl} />
            </div>
            <h4>{article.title}</h4>
            <p>{article.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
