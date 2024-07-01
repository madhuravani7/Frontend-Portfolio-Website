import React from 'react';
import './Projects.css'
function Projects() {
  return (
    <div id="projects">
      <h2>Projects that I've worked on so far...</h2>
      <div id='projects-tab'>
          <div className='child'>
            <div className='image-wrapper'>
               <img src={process.env.PUBLIC_URL + '/images/madhu.jpeg'} alt='project2'/>
            </div>
            <h3>Blog Page</h3>
            <p>Used CRUD </p>
          </div>

          <div className='child'>
            <div className='image-wrapper'>
               <img src={process.env.PUBLIC_URL + '/images/madhu.jpeg'} alt='project2'/>
            </div>
            <h3>Keeper App</h3>
            <p>Description of project 2.</p>
          </div>

          <div className='child'>
            <div className='image-wrapper'>
               <img src={process.env.PUBLIC_URL + '/images/madhu.jpeg'} alt='project2'/>
            </div>
            <h3>To Do List</h3>
            <p>Description of project 3.</p>
          </div>
      </div>

     
    </div>
  );
}

export default Projects;
