import React from "react";
import RatingInstruction from "./RatingInstruction";
import FindCouncilorInstr from "./FindCouncilorInstr";
import tablet from '../assets/images/tablet.jpg'
import '../App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UserEdu = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakepoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="user-Edu">
      <Slider {...settings}>
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
        
        <FindCouncilorInstr />
        <RatingInstruction />
      </Slider>
    </div>
  );
};

export default UserEdu;