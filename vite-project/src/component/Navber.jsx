import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() { // Changed from Nevbar to Navbar
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link> {/* Capitalized "about" */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* Capitalized "contact" */}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
