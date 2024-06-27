import React from 'react';
import './Home.css'; 
function Home() {
  return (
    <div id="home">
        <div id="home-card">
          <div class="right-content">
            <h2>Madhuravani Budige.</h2>
            <p>I'm a Frontend Developer.</p>
          </div>
          <div class="avatar">
            <img src={process.env.PUBLIC_URL + '/images/madhu.jpeg'} alt='pfp'/>
          </div>
        </div>
    </div>
  );
}

export default Home;
