import React from 'react';
import UserEdu from '../components/UserEdu';
import '../styles/Home.css';


function Home() {
  return (
      <div className='home-container'>
        <div className='councilors-container'></div>
        <UserEdu />
      </div>
  );
}
export default Home;