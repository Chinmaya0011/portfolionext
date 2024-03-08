import React from 'react';
import styles from '../styles/BiographySection.module.css';

const Biography = () => {
  return (
    <div className={styles.biography}>
      <h2 className={styles.heading}>About Me</h2>
      <p>
        Hello, I&apos;m Chinmaya Kumar Mishra, a passionate web developer recent graduate with a keen interest in the ever-evolving world of web development.
      </p>

      <p>
        During my academic years, I gained a solid foundation in various programming languages and technologies such as HTML, CSS, JavaScript, ReactJS, Node.js, and MongoDB. I&apos;ve honed my problem-solving skills through various group projects and internships.
      </p>
      <p>
        My enthusiasm for web development extends beyond the technical aspects. I&apos;m deeply interested in user experience design, constantly learning and exploring new trends and best practices to stay ahead in this dynamic industry.
      </p>
      <p>
        As a fresher, I&apos;m eager to contribute my skills, learn from experienced professionals, and make meaningful contributions to innovative projects.
      </p>
      <p>
        Outside of coding, I enjoy [mention any hobbies or interests related to your personal life that you&apos;d like to share]. I believe in maintaining a healthy work-life balance.
      </p>
      <p>
        I&apos;m excited about the prospect of joining a dynamic team where I can continue to learn, grow, and make a positive impact. Thank you for considering my profile.
      </p>
    </div>
  );
};

export default Biography;
