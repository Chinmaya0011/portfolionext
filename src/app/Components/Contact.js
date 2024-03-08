import React, { useState } from 'react';
import styles from '../styles/contact.module.css'; // Importing CSS module

const Contact = () => {
  
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
  
      
      {/* Google Form iframe */}
      <div className={styles.googleFormContainer}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeRanyD-E9tTC1ndKpysEY79xxG84E7_SL5I2PSJMOqHqjfwg/viewform?embedded=true"
         
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
