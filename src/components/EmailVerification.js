import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const EmailVerification = ({isVerified, setIsVerified}) => {
  const [otp, setOTP] = useState('');
  const [verOutcome, setVerOutcome] = useState(null);
  const navigate = useNavigate();

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // call backend API
      const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/verify_email/', { otp });
      // If verification is successful, navigate to login page
      if (response.data) {
        setVerOutcome(true);
        setIsVerified(true);
        navigate('/login');
      } else {
        setVerOutcome(false);
      }
      
    } catch (error) {
      // Error handling
      console.error('Invalid OPT. try again:', error);
    }
  };

  return (
    <div className='OTP'>
      <h2>OTP Verification</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' id='otp' value={otp} onChange={handleOTPChange} placeholder='Enter Your OTP Here' required />
        <button type='submit'>Verify</button>
      </form>
      {verOutcome === null ? (
        <p>Enter the OTP you received by email to verify your account.</p>
      ) : verOutcome ? (
        <p>OPT verification successful! Redirecting to login...</p>
      ) : (
        <p>OPT verification failed. Please try again</p>
      )}
    </div>
  );
};
export default EmailVerification;