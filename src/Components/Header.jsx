// src/components/Header.jsx
import React from 'react';

function Header() {
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
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
