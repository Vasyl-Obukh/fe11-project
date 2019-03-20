import React from 'react';
import { Link } from 'react-router-dom';

const Sign = () => {
  return (
    <div className="sign">
      <span className="sign--in">
        <Link to="/sign/in">Sign in</Link>
      </span>
      <span className="sign--up">
        <Link to="/sign/up">Sign up</Link>
      </span>
    </div>
  );
};

export default Sign;
