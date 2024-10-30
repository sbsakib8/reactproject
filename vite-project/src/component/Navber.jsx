import React from 'react';
import {NavLink } from 'react-router-dom';
import './Navber.css'
function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink className="nav-link"  to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/about">About</NavLink> 
        </li>
        <li>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
