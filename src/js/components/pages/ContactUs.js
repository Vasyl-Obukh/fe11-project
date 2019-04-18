import React from 'react';
import PageTemplate from '../PageTemplate';
import Breadcrumbs from '../Breadcrumbs';

export default function ContactUs({
  address = '',
  phoneNumber = '',
  socialLinks: { gitHub = '', facebook = '', linkedIn = '', twitter = '' } = []
}) {
  const breadcrumbs = [{name: 'Home', url: '/'}, {name: 'Contact us', last: true}];
  return (
    <PageTemplate>
      <div className='main__head'>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className='contact-us'>
        <div className='contact-us__contacts'>
          <h2 className='contact-us__title'>You can contact us using:</h2>
          <ul className='contact-us__list'>
            <li className='contact-us__item'>
              <span>
                <i className='fas fa-phone' />
                {phoneNumber}
              </span>
            </li>
            <li className='contact-us__item'>
              <a href={facebook}>
                <i className='fab fa-facebook-f' />
                {facebook}
              </a>
            </li>
            <li className='contact-us__item'>
              <a href={gitHub}>
                <i className='fab fa-github' />
                {gitHub}
              </a>
            </li>
            <li className='contact-us__item'>
              <a href={linkedIn}>
                <i className='fab fa-linkedin-in' />
                {linkedIn}
              </a>
            </li>
            <li className='contact-us__item'>
              <a href={twitter}>
                <i className='fab fa-twitter' />
                {twitter}
              </a>
            </li>
          </ul>
        </div>
        <div className='contact-us__location'>
          <h2 className='contact-us__title'>
            Or you can directly find us here:
          </h2>
          <p className='contact-us__address'>{address}</p>
          <iframe
            src='https://www.google.com/maps/d/embed?mid=1a5vTqcy8yEw-Ha23Fk5G-eI0CPg3-E6H'
            className='contact-us__map'
          />
        </div>
      </div>
    </PageTemplate>
  );
}
