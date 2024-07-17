import React from 'react';
import '../styles/Home.css';
import feedback  from '../assets/images/feedback.jpg'
import { Link } from 'react-router-dom';


const Inspiration = () => {
  return (
      <div className='inspiration-container'>
          <div className="insp-story">
            <h3>You Have Hired A Councilor Through Your Vote</h3>
            <h4>Now evaluate and rate the work conducted by your employee.</h4>
            <p></p>
            <h4>Ready To Start Contributing Towards Your Ward Governance?:</h4>
            <p>Get Your Free Account: <Link to="/signup"><button>Register</button></Link></p>
          </div>
          <div className='image-swiper'>
            <img src={feedback} alt="" className='image' />
          </div>
      </div>
  );
}
export default Inspiration;