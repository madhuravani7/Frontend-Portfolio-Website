import React from 'react';
import "./About.css"
import Avatar from '../Home/avatar'
function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className='about-content'>
        <Avatar/>
        <div className='info'>
          <h1>Hello Folks</h1>
          <p>I am a Coding enthusiast and a creative Front-end designer</p>
          <p>Education: Bachelors Degree with 6.57/7 GPA [Distinction] from Federation University [March 2024]</p>
          <p>Interests: Coding, Drawing</p>
          <p>I Leetcode sometimes</p>
        </div>
      </div>
    </div>
  );
}

export default About;
