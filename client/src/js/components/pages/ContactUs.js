import React from 'react';
import PropTypes from 'prop-types';
import PageTemplate from '../PageTemplate';
import Breadcrumbs from '../other/Breadcrumbs';
import { getBreadcrumbs } from '../../utilities';

export default function ContactUs({
  address = '',
  phoneNumber = '',
  socialLinks: { gitHub = '', facebook = '', linkedIn = '', twitter = '' } = []
}) {
  const breadcrumbs = getBreadcrumbs({ page: 'Contact us' });
  return (
    <PageTemplate>
      <div className='main__head'>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className='contact-us'>
        {phoneNumber || facebook || gitHub || linkedIn || twitter ? (
          <div className='contact-us__contacts'>
            <h2 className='contact-us__title'>You can contact us using:</h2>
            <ul className='contact-us__list'>
              {phoneNumber ? (
                <li className='contact-us__item'>
                  <span>
                    <i className='fas fa-phone' />
                    {phoneNumber}
                  </span>
                </li>
              ) : null}
              {facebook ? (
                <li className='contact-us__item'>
                  <a href={facebook}>
                    <i className='fab fa-facebook-f' />
                    {facebook}
                  </a>
                </li>
              ) : null}
              {gitHub ? (
                <li className='contact-us__item'>
                  <a href={gitHub}>
                    <i className='fab fa-github' />
                    {gitHub}
                  </a>
                </li>
              ) : null}
              {linkedIn ? (
                <li className='contact-us__item'>
                  <a href={linkedIn}>
                    <i className='fab fa-linkedin-in' />
                    {linkedIn}
                  </a>
                </li>
              ) : null}
              {twitter ? (
                <li className='contact-us__item'>
                  <a href={twitter}>
                    <i className='fab fa-twitter' />
                    {twitter}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        ) : null}
        <div className='contact-us__location'>
          <h2 className='contact-us__title'>You can directly find us here:</h2>
          {address ? <p className='contact-us__address'>{address}</p> : null}
          {navigator.onLine ? (
            <iframe
              src='https://www.google.com/maps/d/embed?mid=1a5vTqcy8yEw-Ha23Fk5G-eI0CPg3-E6H'
              className='contact-us__map'
            />
          ) : (
            <div className='contact-us__map contact-us__map_offline' />
          )}
        </div>
      </div>
    </PageTemplate>
  );
}

ContactUs.propTypes = {
  address: PropTypes.string,
  phoneNumber: PropTypes.string,
  socialLinks: PropTypes.shape({
    gitHub: PropTypes.string,
    facebook: PropTypes.string,
    linkedIn: PropTypes.string,
    twitter: PropTypes.string
  })
};
