import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from './SocialLinks';
import Copyright from './Copyright';

export default function Footer({ socialLinks, copyright }) {
  return (
    <footer className='footer'>
      <SocialLinks socialLinks={socialLinks} />
      <Copyright copyright={copyright} />
    </footer>
  );
}

Footer.propTypes = {
  socialLinks: PropTypes.object,
  copyright: PropTypes.string
};
