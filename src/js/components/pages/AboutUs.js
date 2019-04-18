import React from 'react';
import PageTemplate from '../PageTemplate';
import Breadcrumbs from '../Breadcrumbs';

export default function AboutUs({ gallery = [], text = '' }) {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About us', last: true }
  ];
  return (
    <PageTemplate>
      <div className='main__head'>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className='about-us'>
        <div className='about-us__gallery'>
          <h2 className='about-us__title'>Some photos of us</h2>
          <div className='about-us__images'>
            {gallery.map((_, id) => (
              <div
                className='about-us__img'
                role='img'
                key={id}
                style={{
                  backgroundImage: `url('${_}')`
                }}
              />
            ))}
          </div>
        </div>
        <div className='about-us__overview'>
          <h2 className='about-us__title'>Who we are:</h2>
          <p className='about-us__text'>{text}</p>
        </div>
      </div>
    </PageTemplate>
  );
}
