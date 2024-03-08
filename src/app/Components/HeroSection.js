import React from 'react';
import style from '../styles/HeroSection.module.css'; // Adjust the path if needed
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Image from 'next/image'; // Import Image component from Next.js
import mydp from '../../../public/passphoto.png';

const HeroSection = () => {
  return (
    <section className={`${style.hero} container`}>
      <div className={style.heroContent}>
        <h1 className={style.heroTitle}>--Hi, I&apos;m Chinmaya!--</h1>
        <p className={style.heroDescription}>
          I&apos;m a Frontend Developer with a passion for Web Development. I&apos;m excited to showcase my skills and experience through this portfolio.
        </p>
      
      </div>
      <div className={style.image}>
        <Image src={mydp} alt="Your Profile Picture" className={style.profilePicture} />
      </div>
      <div className={style.socialIcons}>
          {/* Add your social media links here */}
          <a href="https://www.linkedin.com/in/chinmaya-kumar-mishra-24099b21b/" className={style.socialIcon} target='blank'>
            <FaLinkedin />
          </a>
          <a href="https://github.com/Chinmaya0011" className={style.socialIcon} target='blank'>
            <FaGithub />
          </a>
          <a href="https://twitter.com/Chinmay67358261" className={style.socialIcon} target='blank'>
            <FaTwitter />
          </a>
        </div>
    </section>
  );
};

export default HeroSection;
