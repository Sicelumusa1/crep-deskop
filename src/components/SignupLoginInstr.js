import React from 'react';
import tablet from '../assets/images/tablet.jpg'

const SignupLoginInstr = () => {
  return (
    <div className='card'>
      <img src={tablet} alt='Error loading image'></img>
      <h2>Sign Up For A Free Account</h2>
      <ul>
        <li><h6>Navigate to "Signup".</h6></li>
        <li><h6>Fill all the form fields</h6></li>
        <li><h6>Information provided here links you to your Councilor</h6></li>
        <li><h6>Submit the form and Check your emails for "Activation OTP"</h6></li>
        <li><h6>Use the OTP to confirm ownership of the email account</h6></li>
        <li><h6>Use your credentials provided during Signup to Login</h6></li>
      </ul>
    </div>
  )
}

export default SignupLoginInstr;
