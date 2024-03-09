import React from 'react';
import style from '../styles/about.module.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function About() {
  return (
    <>
     <Header/>
  <div className={style.about}>
    <h1 className={style.heading}>About Me</h1>
    <div className={style.content}>
      <p className={style.paragraph}>Hello, I&apos;m CHINMAYA KUMAR MISHRA, a passionate web developer recent graduate with a keen interest in the ever-evolving world of web development.</p>
      
      <p className={style.paragraph}>During my academic years, I gained a solid foundation in various programming languages and technologies such as HTML, CSS, JavaScript, ReactJS, Node.js, and MongoDB. I&apos;ve honed my problem-solving skills through various group projects and internships.</p>
      
      <p className={style.paragraph}>My enthusiasm for web development extends beyond the technical aspects. I&apos;m deeply interested in user experience design, constantly learning and exploring new trends and best practices to stay ahead in this dynamic industry.</p>
      
      <p className={style.paragraph}>As a fresher, I&apos;m eager to contribute my skills, learn from experienced professionals, and make meaningful contributions to innovative projects.</p>
      
      <p className={style.paragraph}>Outside of coding, I enjoy [mention any hobbies or interests related to your personal life that you&apos;d like to share]. I believe in maintaining a healthy work-life balance.</p>
      
      <p className={style.paragraph}>I&apos;m excited about the prospect of joining a dynamic team where I can continue to learn, grow, and make a positive impact. Thank you for considering my profile.</p>
    </div>
  </div>
  <Footer/>
</>

  );
}

export default About
