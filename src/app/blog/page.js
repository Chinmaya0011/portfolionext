import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import style from '../styles/blog.module.css';

const SimpleBlog = () => {
  return (
    <>
      <Header />
      <div className={style.blogContainer}>
        <div className={style.blogPost}>
          <h2>My First Blog Post</h2>
          <p>This is my first blog post. I'm excited to start sharing my thoughts and experiences with you!</p>
        </div>

        <div className={style.blogPost}>
          <h2>My Second Blog Post</h2>
          <p>In this post, I'll be discussing a topic that's been on my mind lately. Stay tuned!</p>
        </div>

        <div className={style.blogPost}>
          <h2>My Third Blog Post</h2>
          <p>Today, I want to share a personal story with you. I hope you find it inspiring!</p>
        </div>

        {/* Add more blog posts as needed */}
      </div>
      <Footer />
    </>
  );
};

export default SimpleBlog;
