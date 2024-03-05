import React from 'react';
import styles from '../styles/eaducation.module.css';
import Image from 'next/image';
import image1 from '../../../public/gpbm.png'
import image2 from '../../../public/pmec.png'

const Education = () => {
  return (
    <div className={styles.educationContainer}>
      <h2 className={styles.heading}>EDUCATION</h2>

      <div className={styles.flexContainer}>
        <div className={styles.college}>
          {/* <img src={image2} alt="College Image" className={styles.collegeImage} /> */}
          <div className={styles.collegeInfo}>
            <p className={styles.date}>07/2018 – 07/2021</p>
            <p className={styles.degree}>Bachelor of Technology, PMEC</p>
            <p className={styles.location}>Berhampur, Odisha</p>
            {/* Additional text content */}
            <p>Additional information about the degree program.</p>
            <p>Additional details about the college experience.</p>
          </div>
        </div>

        <div className={styles.college}>
          {/* <img src={image1} alt="College Image" className={styles.collegeImage} /> */}
          <div className={styles.collegeInfo}>
            <p className={styles.date}>07/2014 – 07/2017</p>
            <p className={styles.degree}>Diploma in Engineering, Govt. polytechnic.</p>
            <p className={styles.location}>Berhampur, Odisha</p>
            {/* Additional text content */}
            <p>Additional information about the diploma program.</p>
            <p>Additional details about the polytechnic experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
