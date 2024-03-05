import React from 'react';
import Image from 'next/image';
import style from '../styles/projects.module.css'
import pimg from '../../../public/hpmanagment.png';
import pimgg from '../../../public/storehub.png'
import pimggg from '../../../public/pokedex.png'
import Link from 'next/link';
 const projects = [
    {
      title: 'Pokedex App',
      image: pimgg,
      description: 'A Pokedex app to view information about different Pokemon species.',
      id: 'pokedex', // Unique identifier for the project
    },
    {
      title: 'Hospital Management App',
      image: pimg,
      description: 'An app to manage patient records and appointments for a hospital.',
      id: 'hospital', // Unique identifier for the project
    },
    {
      title: 'Storhub',
      image: pimggg,
      description: 'An online platform for buying and selling storage solutions.',
      id: 'storhub', // Unique identifier for the project
    }
  ];
  const Projects = () => {
  // Define an array of project objects
 

  return (
    <div className={style.myproject}>
      <h2 className={style.title}>Projects</h2>
      <div className={style.project}>
        {/* Map through the projects array and render a project card for each */}
        {projects.map((project, index) => (
          <div key={index} className={style.projectCard}>
            <h3 className={style.projectTitle}>{project.title}</h3>
            <Image className={style.projectImage} src={project.image} alt={project.title} />
            <p className={style.projectDescription}>{project.description}</p>
            <div className={style.buttons}>
              <button className={style.visitButton}>Visit</button>
              {/* Use the Link component to navigate to the project details page */}
              <Link className={style.detailsButton} href={`/projects/${project.id}`}>
                 Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
}
 // Exporting the projects data array
export {projects}
export default Projects;