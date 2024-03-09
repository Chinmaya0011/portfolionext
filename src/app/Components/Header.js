// Header.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css'; // Import CSS module styles
import Mode from './Mode';

const Header = () => {
  const [selected, setSelected] = useState("home");

  return (
    <header className={styles.header}>
      <div className={styles.logo}>ChinmAya</div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/" className={`${styles.navLink} ${selected === "home" ? styles.selected : ""}`} onClick={() => setSelected("home")}>Home</Link>
          </li>
          <li>
            <Link href="/about" className={`${styles.navLink} ${selected === "about" ? styles.selected : ""}`} onClick={() => setSelected("about")}>About</Link>
          </li>
          <li>
            <Link href="/projects" className={`${styles.navLink} ${selected === "projects" ? styles.selected : ""}`} onClick={() => setSelected("projects")}>Projects</Link>
          </li>
         
   
          <li>
            <Link href="/github" className={`${styles.navLink} ${selected === "github" ? styles.selected : ""}`} onClick={() => setSelected("blog")}>Git Hub</Link> {/* Add Blog link */}
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <Mode /> {/* Add Mode component for dark mode toggle */}
    </header>
  );
};

export default Header;
