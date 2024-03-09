import React, { useState, useEffect } from 'react';
import styles from '../styles/contact.module.css'; // Importing CSS module
import Loading from './Loading';

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const iframe = document.getElementById('googleForm');
    if (iframe) {
      iframe.onload = () => {
        setLoading(false);
      };
    }
  }, []);

  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
  
      {/* Google Form iframe */}
      <div className={styles.googleFormContainer}>
        {loading && <Loading />} {/* Show loading component while fetching data */}
        <iframe
          id="googleForm"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeRanyD-E9tTC1ndKpysEY79xxG84E7_SL5I2PSJMOqHqjfwg/viewform?embedded=true"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
