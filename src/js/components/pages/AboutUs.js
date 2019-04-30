import React from 'react';
import PropTypes from 'prop-types';
import PageTemplate from '../PageTemplate';
import Breadcrumbs from '../other/Breadcrumbs';
import { getBreadcrumbs } from '../../utilities';

export default function AboutUs({ gallery = [], text = '' }) {
  const breadcrumbs = getBreadcrumbs({ page: 'About us' });
  return (
    <PageTemplate>
      <div className='main__head'>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className='about-us'>
        {gallery.length ? (
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
        ) : null}
        {text ? (
          <div className='about-us__overview'>
            <h2 className='about-us__title'>Who we are:</h2>
            <p className='about-us__text'>{text}</p>
          </div>
        ) : null}
      </div>
    </PageTemplate>
  );
}

AboutUs.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string
};
