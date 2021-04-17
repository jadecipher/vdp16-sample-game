
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="my-name">
      <h1>Michaela</h1>
      <h1>Burns</h1>
    </div>
    <div className="navbar-links">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <a href="Michaela_Burns_Resume.pdf" target="_blank">
        Resume
      </a>
      <Link to="/projects">Projects</Link>
      <a
        href="mailto:michaelaburns0@gmail.com?Subject=Hi%20Michaela!"
        target="_blank"
        without
        rel="noopener noreferrer"
      >
        Contact
      </a>
    </div>
  </nav>
);

export default Navbar;