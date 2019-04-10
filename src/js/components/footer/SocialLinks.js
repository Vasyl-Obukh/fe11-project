import React from 'react';

export default function SocialLinks({socialLinks: {gitHub, facebook, linkedIn, twitter}}) {
  return (
    <div className='footer--social social'>
      <a href={facebook} className='social--link'>
        <i className='fab fa-facebook-f'></i>
      </a>
      <a href={gitHub} className='social--link'>
        <i className='fab fa-github'></i>
      </a>
      <a href={twitter} className='social--link'>
        <i className='fab fa-twitter'></i>
      </a>
    </div>
  );
}
