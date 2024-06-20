import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';


function NavBar({ isAuthenticated, setIsAuthenticated }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const User = localStorage.getItem('User');
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      <ul className={`navbar-nav ${menuOpen ? 'open': ''}`}>
        <li className="nav-item"><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li className="nav-item"><Link to="/report" onClick={closeMenu}>Public Perspective</Link></li>
        {isAuthenticated ? (
          <>
            <li className="nav-item"><Link to="/contact" onClick={closeMenu}>Your Voice Matters</Link></li>
          </>
        ) : null}
        <li className="nav-item"><Link to="/my-councilor" onClick={closeMenu}>My Councilor</Link></li>
        {isAuthenticated ? (
          <>
            <li className="nav-item"><Link to="/my-profile" onClick={closeMenu}><span>{User}</span></Link></li>
            <li className="nav-item"><Link to="/signup" onClick={closeMenu}>Logout</Link></li>
          </>
        ) : (
          <>
            <li className="nav-item"><Link to="/signup" onClick={closeMenu}>Signup</Link></li>
            <li className="nav-item"><Link to="/login" onClick={closeMenu}>Login</Link></li>
          </>
        )}
      </ul>
      </div>
    </nav>
  );
}

export default NavBar;