import React from 'react';

import style from './HomePage.module.css'

export const HomePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 className={style.h1}>📖 Personal Phonebook Web App</h1>
      <h2 className={style.h2}>Your Contacts, Our Commitment - Simplifying Connections with Precision!</h2>
      <h3 className={style.h3}>Please register or login to continue.</h3>
    </div>
  );
};
