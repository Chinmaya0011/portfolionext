import React from 'react';
import Image from 'next/image';
import htmlpng from '../../../public/html.png';
import csspng from '../../../public/css.png';
import express from '../../../public/expressjs.png';
import js from '../../../public/javascript.png';
import bootstrap from '../../../public/bootstrap.png';
import react from '../../../public/react.png';
import node from '../../../public/nodejs.png';
import next from '../../../public/nextjs.png';
import tailwind from '../../../public/tailwind.png';
import github from '../../../public/github.png';
import firebase from '../../../public/firebase.png';
import git from '../../../public/git.png';
import mongodb from '../../../public/mongodb.png';
import style from '../styles/SkillsSection.module.css';

const Skills = () => {
  return (
    <div>
            <h2 className={style.heading}>My Skills</h2>

    <div className={style.myskill}>
      <div className={style.skill}>
        <Image className={style.skillImage} src={htmlpng} alt="HTML PNG" />
        <span className={style.skillName}>HTML</span>
      </div>
      <div className={style.skill}>
        <Image className={style.skillImage} src={csspng} alt="CSS PNG" />
        <span className={style.skillName}>CSS</span>
      </div>
      <div className={style.skill}>
        <Image className={style.skillImage} src={express} alt="ExpressJS PNG" />
        <span className={style.skillName}>ExpressJS</span>
      </div>
      <div className={style.skill}>
        <Image className={style.skillImage} src={js} alt="JavaScript PNG" />
        <span className={style.skillName}>JavaScript</span>
      </div>
      <div className={style.skill}>
        <Image className={style.skillImage} src={bootstrap} alt="Bootstrap PNG" />
        <span className={style.skillName}>Bootstrap</span>
      </div>
      <div className={style.skill}>
        <Image className={style.skillImage} src={react} alt="React PNG" />
        <span className={style.skillName}>React</span>
      </div>
      <div className={style.skill}>
        <Image className={style.skillImage} src={node} alt="Node.js PNG" />
        <span className={style.skillName}>Node.js</span>
      </div>
      <div className={style.skill}>
        <Image className={style.skillImage} src={next} alt="Next.js PNG" />
        <span className={style.skillName}>Next.js</span>
      </div>
      <div className={style.skill}>
        <Image className={style.skillImage} src={tailwind} alt="Tailwind CSS PNG" />
        <span className={style.skillName}>Tailwind CSS</span>
      </div>
      <div className={style.skill}>
        <Image className={style.skillImage} src={github} alt="GitHub PNG" />
        <span className={style.skillName}>GitHub</span>
      </div>
      <div className={style.skill}>
        <Image className={style.skillImage} src={firebase} alt="Firebase PNG" />
        <span className={style.skillName}>Firebase</span>
      </div>
      <div className={style.skill}>
        <Image className={style.skillImage} src={git} alt="Git PNG" />
        <span className={style.skillName}>Git</span>
      </div>
      <div className={style.skill}>
        <Image className={style.skillImage} src={mongodb} alt="MongoDB PNG" />
        <span className={style.skillName}>MongoDB</span>
      </div>
    </div>
    </div>
  );
};

export default Skills;
