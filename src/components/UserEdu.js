import React from "react";
import '../App.css';

const UserEdu = () => {
 
  return (
    <div className="user-Edu">
      <div className="card-1">
        <div className="card-body">
          <h3 className="card-title">Step 1: Sign Up For A Free Account</h3>
          <ul>
            <li><h6 className="card-text">Click "Signup" to create an account.</h6></li>
            <li><h6 className="card-text">Fill in your details.</h6></li>
            <li><h6 className="card-text">Pick your Province, Municipality and Ward carefully.</h6></li>
            <li><h6 className="card-text">Once you hit "Register", check your email to confirm.</h6></li>
            <li><h6 className="card-text">Use the OneTimePin(OTP) received to confirm ownership of the email address</h6></li>
            <li><h6 className="card-text">CONGRATS!!! Now you can find and rate your Councilor for better service.</h6></li>
          </ul>
        </div>
      </div>
      <div className="card-2">
        <div className="card-body">
          <h3 className="card-title">Step 2: Browse Councilors and Find Yours</h3>
          <ul>
            <li><h6 className="card-text">Click "My Councilor" on the navigation bar.</h6></li>
            <li><h6 className="card-text">Use the dropdowns to find any Councilor of any Ward in the Country to view their details</h6></li>
            <li><h6 className="card-text">Details include their average ratings and summary of residend's Feedback.</h6></li>
          </ul>
        </div>
      </div>
      <div className="card-3">
        <div className="card-body">
          <h3 className="card-title">Step 3: Rate The Councilor Of Your Ward</h3>
          <ul>
            <li><h6 className="card-text">Find your Councilor" as described in Step 2".</h6></li>
            <li><h6 className="card-text">In a list of Services, pick each applicable service and provide a rating betwee 1 and 5</h6></li>
            <li><h6 className="card-text"> 5 means the councilor done exceptionally well on that servoce, 1 means the poorest delivery.</h6></li>
          </ul>
        </div>
      </div>
      
      {/* <div background='../asset/images/ai-generated-B.jpg'>
        Step 2: Browse Councilors and Find Yours
      </div>
      <div background='../asset/images/typing.jpg'>
        Step 3: Rate and Reciew Your Councilor
      </div> */}
    </div>
  );
};

export default UserEdu;