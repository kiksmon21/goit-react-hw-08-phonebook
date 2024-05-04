import React from 'react';
import { Blocks } from 'react-loader-spinner';

import style from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={style.div}>
      <Blocks
        height="160"
        width="160"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  );
};