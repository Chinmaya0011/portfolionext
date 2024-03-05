// Certification.js

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
          <button className={style.verifyButton}>Verify</button>
        </div>
        <div className={style.certificationItemWrapper}>
          <div className={style.certificationItem}>
            <div className={style.certificationContent}>
              <strong className={style.certificationName}>HTML Certification:</strong>
              <p className={style.certificationDescription}>KGCoding by Prashant Sir</p>
              <p className={style.certificationIssueDate}>(Issued Dec 2023)</p>
            </div>
          </div>
          <button className={style.verifyButton}>Verify</button>
        </div>
        <div className={style.certificationItemWrapper}>
          <div className={style.certificationItem}>
            <div className={style.certificationContent}>
              <strong className={style.certificationName}>JavaScript Certification:</strong>
              <p className={style.certificationDescription}>KGCoding by Prashant Sir</p>
              <p className={style.certificationIssueDate}>(Issued Dec 2023)</p>
            </div>
          </div>
          <button className={style.verifyButton}>Verify</button>
        </div>
        {/* New certification items */}
        <div className={style.certificationItemWrapper}>
          <div className={style.certificationItem}>
            <div className={style.certificationContent}>
              <strong className={style.certificationName}>Basic Data Structures & Algorithms:</strong>
              <p className={style.certificationDescription}>freeCodeCamp</p>
              <p className={style.certificationIssueDate}>(Issued Oct 2023)</p>
            </div>
          </div>
          <button className={style.verifyButton}>Verify</button>
        </div>
        <div className={style.certificationItemWrapper}>
          <div className={style.certificationItem}>
            <div className={style.certificationContent}>
              <strong className={style.certificationName}>Web Developer Certificate:</strong>
              <p className={style.certificationDescription}>Internshal</p>
              <p className={style.certificationIssueDate}>(Issued March 2032)</p>
            </div>
          </div>
          <button className={style.verifyButton}>Verify</button>
        </div>
      </div>
    </div>
  );
};

export default Certification;
