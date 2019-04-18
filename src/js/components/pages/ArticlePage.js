import React from 'react';
import PageTemplate from '../PageTemplate';
import { Link, Redirect } from 'react-router-dom';
import formatDate from '../../formatDate';
import CommentsContainer from '../../containers/CommentsContainer';
import BreadCrumbs from '../Breadcrumbs';

export default function ArticlePage({ article = {}, categories, breadcrumbs }) {
  return (
    <PageTemplate>
      {!article ? <Redirect to='/error-404' /> : null}
      <div className='main__head'>
        <BreadCrumbs breadcrumbs={breadcrumbs} />
      </div>
      <article className='article'>
        <h2 className='article__title'>{article.title}</h2>

        <div className='article__head'>
          <div className='article__categories'>
            <span>Categories: </span>
            {categories.map(category => {
              return category.length !== 0 ? (
                <Link
                  className='article__category'
                  key={category.id}
                  to={`/categories/${category.name}`}
                >
                  {category.name}
                </Link>
              ) : (
                ''
              );
            })}
          </div>

          <div className='article__date'>
            <span>{formatDate(article.date)}</span>
          </div>
        </div>

        <div
          role='img'
          className='article__thumbnail'
          style={{ backgroundImage: `url(${article.thumbnailUrl})` }}
        >
        </div>

        <div className='article__text'>
          <p>{article.text}</p>
        </div>
      </article>
      <section className='article--comments'>
        <CommentsContainer articleId={article.id} />
      </section>
    </PageTemplate>
  );
}
