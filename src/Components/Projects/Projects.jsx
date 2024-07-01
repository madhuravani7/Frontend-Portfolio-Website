import React from 'react';
import './Projects.css';
import projectdetails from './Projectdetails';

function Projects() {
  return (
    <div id='projects'>
      <h2>Projects I've worked on so far...</h2>
      <div id='projects-tab'>
        {projectdetails.map(({ src, alt, heading, description }, index) => (
          <div className='child' key={index}>
            <div className='image-wrapper'>
              <img src={src} alt={alt} />
              </div>
              <h3>{heading}</h3>
              <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
