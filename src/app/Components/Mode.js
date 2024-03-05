import React from 'react';
import styles from '../styles/Mode.module.css';

const Mode = () => {
  const handleContactMe = () => {
    window.location.href = 'mailto:imchinu17@gmail.com';
  };

  return (
    <div className={styles.container}>
      <button className={styles.contactButton} onClick={handleContactMe}>
        Contact Me
      </button>
    </div>
  );
};

export default Mode;
