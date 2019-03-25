import React from 'react';

export default function StatusBar({ logOut, history }) {
  return (
    <>
      <button onClick={() => history.push('/')}>Return</button>
      <button onClick={logOut}>
        Log out
      </button>
    </>
  );
}
