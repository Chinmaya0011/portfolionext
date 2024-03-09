import React from 'react';
import style from '../styles/loading.module.css'
const Loading = () => {
  return (
    <div className={style.loadingcontainer}>
      <div className={style.loadingspinner}></div>
      <div>Please Wait...</div>
    </div>
  );
};

export default Loading;
