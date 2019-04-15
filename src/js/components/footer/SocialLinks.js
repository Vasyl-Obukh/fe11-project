import React from 'react';

export default function SocialLinks({socialLinks: {gitHub, facebook, linkedIn, twitter}}) {
  return (
    <div className='footer__social social'>
      <a href={facebook} className='social__link'>
        <i className='fab fa-facebook-f' />
      </a>
      <a href={gitHub} className='social__link'>
        <i className='fab fa-github' />
      </a>
      <a href={twitter} className='social__link'>
        <i className='fab fa-twitter' />
      </a>
      <a href={linkedIn} className='social__link'>
        <i className='fab fa-linkedin-in' />
      </a>
    </div>
  );
}
