import React from 'react';
import About from '../About/About'
import Avatar from './avatar'
import './Home.css'; 



function Home({isFlipped, onFlip}) {

  return (
    <div id="home" onClick={onFlip}>
      <div className={`home-inner ${isFlipped? 'flipped': ''}`}>
        <div id="home-front">
          <div class="right-content">
            <h1>Madhuravani Budige.</h1>
            <p>I'm a Frontend Developer.</p>
          </div>
          <Avatar/>
        </div>
        <div id="home-back">
          <About/>
        </div>
      </div>
  </div>
  );
}

export default Home;
