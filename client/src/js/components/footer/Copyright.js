import React from 'react';
import PropTypes from 'prop-types';

export default function Copyright(props) {
  const defaultCopyright =
    'Copyright © 2019 by Vasyl Obukh. All Rights Reserved.';
  const { copyright } = props;
  return (
    <div className='footer__copyright'>
      <p>{copyright || defaultCopyright}</p>
    </div>
  );
}

Copyright.propTypes = {
  copyright: PropTypes.string
};
