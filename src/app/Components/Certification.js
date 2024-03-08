import React from 'react';
import style from '../styles/certificate.module.css';

const Certification = () => {
  return (
    <div className={style.mycertificate}>
      <h2 className={style.certificationTitle}>Certification</h2>
      <div className={style.certificationContainer}>
        {/* Existing certification items */}
        <div className={style.certificationItemWrapper}>
          <div className={style.certificationItem}>
            <div className={style.certificationContent}>
              <strong className={style.certificationName}>CSS Certification:</strong>
              <p className={style.certificationDescription}>KGCoding by Prashant Sir</p>
              <p className={style.certificationIssueDate}>(Issued Dec 2023)</p>
            </div>
          </div>
          <a href="https://www.kgcoding.in/verify-certificate?serialno=MDP90CDU" className={style.verifyButton}>Verify</a>
        </div>

        <div className={style.certificationItemWrapper}>
          <div className={style.certificationItem}>
            <div className={style.certificationContent}>
              <strong className={style.certificationName}>HTML Certification:</strong>
              <p className={style.certificationDescription}>KGCoding by Prashant Sir</p>
              <p className={style.certificationIssueDate}>(Issued Dec 2023)</p>
            </div>
          </div>
          <a href="https://www.kgcoding.in/verify-certificate?serialno=MDP90CDU" className={style.verifyButton}>Verify</a>
        </div>
        
        <div className={style.certificationItemWrapper}>
          <div className={style.certificationItem}>
            <div className={style.certificationContent}>
              <strong className={style.certificationName}>JavaScript Certification:</strong>
              <p className={style.certificationDescription}>KGCoding by Prashant Sir</p>
              <p className={style.certificationIssueDate}>(Issued Dec 2023)</p>
            </div>
          </div>
          <a href="https://www.kgcoding.in/verify-certificate?serialno=HYMMK8P7" className={style.verifyButton}>Verify</a>
        </div>

        <div className={style.certificationItemWrapper}>
          <div className={style.certificationItem}>
            <div className={style.certificationContent}>
              <strong className={style.certificationName}>Frontend Developer (React) Certificate:</strong>
              <p className={style.certificationDescription}>KGCoding by Prashant Sir</p>
              <p className={style.certificationIssueDate}>(Issued Dec 2023)</p>
            </div>
          </div>
          <a href="https://www.kgcoding.in/verify-certificate?serialno=QZ7OLBZ0" className={style.verifyButton}>Verify</a>
        </div>

        <div className={style.certificationItemWrapper}>
          <div className={style.certificationItem}>
            <div className={style.certificationContent}>
              <strong className={style.certificationName}>Basic Data Structures & Algorithms:</strong>
              <p className={style.certificationDescription}>freeCodeCamp</p>
              <p className={style.certificationIssueDate}>(Issued Oct 2023)</p>
            </div>
          </div>
          <a href="https://freecodecamp.org/certification/fcca4dd26fe-869a-4686-b95b-c9830965356f/javascript-algorithms-and-data-structures" className={style.verifyButton}>Verify</a>
        </div>

        <div className={style.certificationItemWrapper}>
          <div className={style.certificationItem}>
            <div className={style.certificationContent}>
              <strong className={style.certificationName}>Web Developer Certificate:</strong>
              <p className={style.certificationDescription}>Internshala</p>
              <p className={style.certificationIssueDate}>(Issued March 2032)</p>
            </div>
          </div>
          <a href="https://trainings.internshala.com/view_certificate/bh7eyl4ph9o/zn9gbkaym5_/_" className={style.verifyButton}>Verify</a>
        </div>
      </div>
    </div>
  );
};

export default Certification;
