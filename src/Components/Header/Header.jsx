import React, { useState } from 'react';
import './Header.css';

function Header({ onAboutClick }) {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header>
      <div className="logo">
        <span>madhu.</span>
      </div>
      <div className="nav-toggle" onClick={toggleNav}>
        ☰
      </div>
      <div className={`nav-wrapper ${isNavVisible ? 'visible' : ''}`}>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about" onClick={onAboutClick}>About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
