// src/components/Header.jsx
import React from 'react';
import './Header.css'
function Header({onAboutClick}) {
  return (
    <header>
      <div className="logo">
        <span>madhu.</span>
      </div>
      <div className="nav-wrapper">
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
