import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = ({setIsAuthenticated}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call backend API to authenticate user
      const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/login/', { email, password });
      // If authentication is successful, redirect to "My Councilor" page
      if (response.data.success) {
        setIsAuthenticated(true);
        navigate('/my-councilor');
      }
      
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  return (
    <div className='login'>
      <h2>Login To Be Able To Send Your Ratings</h2>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Enter Your Email Address' value={email} onChange={handleEmailChange} required />
        <input type='password' placeholder='Enter Your Password' value={password} onChange={handlePasswordChange} required />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};
export default Login;
