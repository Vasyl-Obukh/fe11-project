import React from 'react';
import PageTemplate from '../PageTemplate';
import { Link, Redirect } from 'react-router-dom';
import formatDate from '../../formatDate';
import CommentsContainer from '../../containers/CommentsContainer';

export default function ArticlePage({ article = {}, categories }) {
  return (
    <PageTemplate>
      {!article ? <Redirect to='/error-404' /> : null}
      <article className='article'>
        <h2 className='article--title'>{article.title}</h2>

        <div className='article--cat-n-date'>
          <div className='categories'>
            <span>Categories: </span>
            {categories.map(category => {
              return category.length !== 0 ? (
                <Link key={category.id} to={`/categories/${category.name}`}>
                  {category.name}
                </Link>
              ) : (
                ''
              );
            })}
          </div>

          <div className='date'>
            <span>{formatDate(article.date)}</span>
          </div>
        </div>

        <div className='article--thumbnail'>
          <img src={article.thumbnailUrl} alt='post thumbnail' />
        </div>

        <div className='article--text'>
          <p>{article.text}</p>
        </div>
      </article>
      <section className='article--comments'>
        <CommentsContainer articleId={article.id}/>
      </section>
    </PageTemplate>
  );
}
