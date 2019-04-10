import React from 'react';
import PageTemplate from '../PageTemplate';
import Breadcrumbs from '../Breadcrumbs';

export default function ContactUs({
  address = '',
  phoneNumber = '',
  socialLinks: { gitHub = '', facebook = '', linkedIn = '', twitter = '' } = []
}) {
  const breadcrumbs = [{ name: 'Contact us', last: true }];
  return (
    <PageTemplate>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div>
        <h2>You can contact us using:</h2>
        <ul>
          <li>
            <i className='fas fa-phone' />
            <span>{phoneNumber}</span>
          </li>
          <li>
            <i className='fab fa-facebook-f' />
            <a href={facebook}>{facebook}</a>
          </li>
          <li>
            <i className='fab fa-github' />
            <a href={gitHub}>{gitHub}</a>
          </li>
          <li>
            <i className='fab fa-linkedin-in' />
            <a href={linkedIn}>{linkedIn}</a>
          </li>
          <li>
            <i className='fab fa-twitter' />
            <a href={twitter}>{twitter}</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Or you can directly find us here:</h2>
        <iframe
          src='https://www.google.com/maps/d/embed?mid=1a5vTqcy8yEw-Ha23Fk5G-eI0CPg3-E6H'
          style={{width: '100%'}}
          height='480'
        />
      </div>
    </PageTemplate>
  );
}
