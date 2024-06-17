import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Logout = ({ setIsAuthenticated }) => {
  
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log("logging out");
    try {

      // Retrieve the refresh token
      const refreshToken = sessionStorage.getItem('refreshToken');
      // Check if refreshToken exists and is not empty
      if (!refreshToken) {
        console.error('Refresh token not found in sessionStorage.');
        return; // Abort logout process if refreshToken is missing or empty
      }
      // Call backend API to perform logout
      const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/logout/', { refreshToken: refreshToken });
      console.log("logout response", response);
      // Clear tokens from sessionStorage
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');
      sessionStorage.removeItem('User');

      // Update authentication state
      setIsAuthenticated(false);

      // redirect to home page
      navigate('/home');

    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className='logout' onClick={handleLogout} style={{ cursor: 'pointer' }}>
    </div>
  );
};
export default Logout;