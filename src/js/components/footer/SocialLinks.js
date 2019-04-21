import React from 'react';
import { PropTypes } from 'prop-types';

export default function SocialLinks({ socialLinks = {} }) {
  const {
    gitHub = '',
    facebook = '',
    linkedIn = '',
    twitter = ''
  } = socialLinks;
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

SocialLinks.propTypes = {
  socialLinks: PropTypes.shape({
    gitHub: PropTypes.string,
    facebook: PropTypes.string,
    linkedIn: PropTypes.string,
    twitter: PropTypes.string
  })
};
