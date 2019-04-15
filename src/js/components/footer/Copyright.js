import React from 'react';

export default function Copyright(props) {
  const defaultCopyright = 'Copyright © 2019 by Vasyl Obukh. All Rights Reserved.';
  const { copyright = defaultCopyright } = props;
  return (
    <div className='footer__copyright'>
      <p>{copyright}</p>
    </div>
  );
}
