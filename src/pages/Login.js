import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { axiosInstance } from '../axiosConfig';

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
      await axiosInstance.post('login/', JSON.stringify({ email, password }));

      // Indicate that the user is authenticated and redirect to mycouncilor page
      setIsAuthenticated(true);      
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
      </form>
    </div>
  );
};
export default Login;
