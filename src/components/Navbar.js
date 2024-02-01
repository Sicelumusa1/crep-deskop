import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function NavBar() {
  
  // Check authentication status
  const isAuthenticated = false;
  

  return (
    <nav className="navbar">
      <ul className="navbar-nav-left">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
      </ul>
      <ul className="navbar-nav-right">
        <li className="nav-item"><Link to="/my-councilor">My Councilor</Link></li>
        {isAuthenticated ? (
          <>
            <li className="nav-item"><Link to="/my-profile">My Profile</Link></li>
            <li className="nav-item">Logged is as {}</li>
            <li className="nav-item"><Link to="/logout">Logout</Link></li>
          </>
        ) : (
          <>
            <li className="nav-item"><Link to="/signup">Signup</Link></li>
            <li className="nav-item"><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;