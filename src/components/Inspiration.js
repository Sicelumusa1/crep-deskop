import React from 'react';
import '../styles/Home.css';
import feedback  from '../assets/images/feedback.jpg'
import { Link } from 'react-router-dom';


const Inspiration = () => {
  return (
      <div className='inspiration-container'>
          <div className="insp-story">
            <h3>Now That You Have Voted,</h3>
            <h4>You are the Boss. Evaluate and rate the work conducted by your employee, the Counsilor.</h4>
            <p>I am a passionate and dedicated software engineer with hands-on experience in both front-end and back-end development. Through a rigorous 12-month software engineering program at ALX, I have developed a comprehensive skill set that includes C, Python, HTML, CSS, JavaScript, Bootstrap, Sass, jQuery, Django, Node.js and React. My journey has been marked by numerous independent and collaborative projects, each contributing to my growth and proficiency in creating efficient, user-friendly applications. My philosophy, "Place me in any scenario, and I will not only adapt but also excel," reflects my commitment to continuous learning and excellence in every challenge I undertake</p>
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