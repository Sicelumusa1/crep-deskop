import React from 'react';
import BestCouncilors from '../components/BestCouncilors';
import WorstCouncilors from '../components/WorstCouncilors';
import UserEdu from '../components/UserEdu';
import '../App.css';


function Home() {
  return (
      <div className='home-container'>
        <div className='councilors-container'>
          <div className='best-councilors'>
            <BestCouncilors />
          </div>
          <div className='worst-councilors'>
            <WorstCouncilors />
          </div>
       </div>	  
       <div className='user-edu'>
          <UserEdu />
       </div>
      </div>
  );
}
export default Home;
