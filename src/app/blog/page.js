import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import style from '../styles/Blog.module.css';

const FrontendBlog = () => {
  return (
    <>
      <Header />
      <div className={style.blogContainer}>
        <h1>Exploring the World of Frontend Development</h1>
        <div className={`${style.blogPost} ${style.importance}`}>
          <h2>The Importance of Frontend Development</h2>
          <p>Frontend development is a crucial aspect of web development that focuses on the user interface and user experience of a website or web application. It involves creating visually appealing and interactive elements that users interact with directly.</p>
        </div>
        <div className={`${style.blogPost} ${style.technologies}`}>
          <h2>Popular Frontend Technologies</h2>
          <p>There are several popular frontend technologies used by developers today, including HTML, CSS, and JavaScript. HTML (HyperText Markup Language) is used for creating the structure of web pages, while CSS (Cascading Style Sheets) is used for styling and formatting the content.</p>
          <p>JavaScript, on the other hand, is a powerful programming language that allows developers to add interactivity and dynamic behavior to web pages. It is commonly used for tasks such as form validation, animation, and DOM manipulation.</p>
        </div>
        <div className={`${style.blogPost} ${style.frameworks}`}>
          <h2>Frameworks and Libraries</h2>
          <p>Frontend developers often use frameworks and libraries to streamline the development process and enhance productivity. Some popular frontend frameworks include React, Angular, and Vue.js, which provide reusable components and a structured approach to building web applications.</p>
          <p>Additionally, frontend libraries like Bootstrap and Material-UI offer pre-designed components and styles to create responsive and visually appealing user interfaces.</p>
        </div>
        <div className={`${style.blogPost} ${style.responsiveDesign}`}>
          <h2>Responsive Web Design</h2>
          <p>With the increasing use of mobile devices, responsive web design has become essential for frontend developers. Responsive design ensures that websites and web applications adapt seamlessly to various screen sizes and devices, providing an optimal viewing experience for users.</p>
          <p>Frontend developers use techniques like fluid grids, flexible images, and media queries to create responsive layouts that adjust dynamically based on the device's screen size.</p>
        </div>
        {/* Add more sections/topics as needed */}
      </div>
      <Footer />
    </>
  );
};

export default FrontendBlog;
