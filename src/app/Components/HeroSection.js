import React from 'react';
import style from '../styles/HeroSection.module.css'; // Adjust the path if needed
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Image from 'next/image'; // Import Image component from Next.js
import mydp from '../../../public/passphoto.png';

const HeroSection = () => {
  return (
    <section className={`${style.hero} container`}>
      <div className={style.heroContent}>
        <h1 className={style.heroTitle}>--Hi, I'm Chinmaya!--</h1>
        <p className={style.heroDescription}>
          I'm a Frontend Developer with a passion for Web Development. I'm excited to showcase my skills and experience through this portfolio.
        </p>
      
      </div>
      <div className={style.image}>
        <Image src={mydp} alt="Your Profile Picture" className={style.profilePicture} />
      </div>
      <div className={style.socialIcons}>
          {/* Add your social media links here */}
          <a href="#" className={style.socialIcon}>
            <FaLinkedin />
          </a>
          <a href="#" className={style.socialIcon}>
            <FaGithub />
          </a>
          <a href="#" className={style.socialIcon}>
            <FaTwitter />
          </a>
        </div>
    </section>
  );
};

export default HeroSection;
