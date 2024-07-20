import React from "react";
import YouTube from 'react-youtube';
import '../styles/Home.css';

const UserEdu = () => {
  const videoId = 'Dmt9OdGrqEc';
  
  const opts ={
    height: '250',
    width: '400',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="user-Edu">
      <h2>User Education</h2>
      <div className="councilor-role">
        <div className="video">
          <YouTube videoId={videoId} opts={opts} />
        </div>
        <h3>Make Informed Decisions When Rating</h3>
      </div>
      <div className="app-navigation">
        <h3>Navigate The Platform</h3>
        <div className="video">
          <YouTube videoId={videoId} opts={opts} />
        </div>
      </div>
    </div>
  )
}

export default UserEdu;