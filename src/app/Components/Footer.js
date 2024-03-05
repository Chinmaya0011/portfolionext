// Footer.js
import React from 'react';
import style from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.info}>
          <p>Address: 123 Street Name, City, Country</p>
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
