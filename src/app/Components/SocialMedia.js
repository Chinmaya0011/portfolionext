import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import style from '../styles/SocialMediaLinks.module.css';

const SocialMedia = () => {
  return (
    <div>
        <h2 className={style.heading}>Follow Me</h2>
    <div className={style.social}>
      <a href="https://www.facebook.com" className={style.icon}>
        <FaFacebook className={style.faIcon} />
      </a>
      <a href="https://twitter.com" className={style.icon}>
        <FaTwitter className={style.faIcon} />
      </a>
      <a href="https://www.instagram.com" className={style.icon}>
        <FaInstagram className={style.faIcon} />
      </a>
      <a href="https://www.linkedin.com" className={style.icon}>
        <FaLinkedin className={style.faIcon} />
      </a>
      <a href="https://github.com" className={style.icon}>
        <FaGithub className={style.faIcon} />
      </a>
      <a href="https://wa.me/1234567890" className={style.icon}>
        <FaWhatsapp className={style.faIcon} />
      </a>
    </div>
    </div>
  );
};

export default SocialMedia;
