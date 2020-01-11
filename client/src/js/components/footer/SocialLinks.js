import React from 'react';
import { PropTypes } from 'prop-types';

export default function SocialLinks({ socialLinks = {} }) {
  const {
    gitHub = '',
    facebook = '',
    linkedIn = '',
    twitter = ''
  } = socialLinks;
  return gitHub || facebook || linkedIn || twitter ? (
    <div className='footer__social social'>
      {facebook ? (
        <a href={facebook} className='social__link'>
          <i className='fab fa-facebook-f' />
        </a>
      ) : null}
      {gitHub ? (
        <a href={gitHub} className='social__link'>
          <i className='fab fa-github' />
        </a>
      ) : null}
      {twitter ? (
        <a href={twitter} className='social__link'>
          <i className='fab fa-twitter' />
        </a>
      ) : null}
      {linkedIn ? (
        <a href={linkedIn} className='social__link'>
          <i className='fab fa-linkedin-in' />
        </a>
      ) : null}
    </div>
  ) : null;
}

SocialLinks.propTypes = {
  socialLinks: PropTypes.shape({
    gitHub: PropTypes.string,
    facebook: PropTypes.string,
    linkedIn: PropTypes.string,
    twitter: PropTypes.string
  })
};
