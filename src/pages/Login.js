import React, { useState } from 'react';
import { axiosInstance } from '../axiosConfig';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

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
      await axiosInstance.post('auth/login/', { email, password });
      
      setIsAuthenticated(true);
      // Redirect to "My Councolor" page
      navigate('/my-councilor');
      
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
        <p>You don't have an account? <Link to="/signup">Register</Link></p>
      </form>
    </div>
  );
};
export default Login;