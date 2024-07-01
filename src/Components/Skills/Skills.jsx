import React from 'react';
import images from './Skillset'
import './Skills.css'
function Skills() {
  return (
    <div id="skills">
      <h2>Skills Journey</h2>
      <div className='image-container'>
        {images.map(({src, alt}) => (
          <div className='image'>
            <img src={src} alt={alt} />
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Skills;
