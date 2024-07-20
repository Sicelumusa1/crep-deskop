import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axiosConfig";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';


function NavBar({ isAuthenticated, toggleHeaderContent }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      // fetch user info from backend
      axiosInstance.get('auth/profile/')
        .then(response => {
          setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user info:', error);
      });
    }
  }, [isAuthenticated]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    toggleHeaderContent();
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
            <li className="nav-item"><Link to="/my-profile" onClick={closeMenu}><span>{user?.username}</span></Link></li>
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