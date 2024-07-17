import React from 'react';
import UserEdu from '../components/UserEdu';
import Inspiration from '../components/Inspiration';
import MunicipalityMoney from '../components/MunicipalityMoney';
import '../styles/Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Reachout from '../components/Reachout';

function Home() {
  return (
      <div className='home-container'>
        <h1>Welcome To CREP</h1>
        <p>A Community Rating and Empowerment Platform</p>
        <div className='inspiration'>
          <Inspiration />
        </div>
        <UserEdu />
        <MunicipalityMoney />
        <footer className="App-footer">
          <p>Trasparency is Key to African Economic Transformation and Poverty Alleviation</p>
          <div className='reachout'>
            <div className='reachout-form'>
              <p>Having Issues With Your Account? Reachout to Us</p>
              <Reachout/>
            </div>
            <div className='socials'>
              <p>Check out our Socials for updates of the application and more related work</p>
              <div className='linkedin'>
                <a href="https://www.linkedin.com/in/sicelumusa-gabuza-5707a265/">
                  <FontAwesomeIcon icon={faLinkedin} size='2x' />
                  <p>Linkedin</p>
                </a>
              </div>
              <div className='github'>
                <a href="https://github.com/Sicelumusa1/crep-deskop">
                  <FontAwesomeIcon icon={faGithub} size='2x' />
                  <p>Project Rithub Repository</p>
                </a>
              </div>
              <div className='twitter'>
                <a href="https://x.com/ScelumusaG">
                  <FontAwesomeIcon icon={faTwitter} size='2x' />
                  <p>X</p>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}
export default Home;