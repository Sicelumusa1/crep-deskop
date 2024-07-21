import React, { useState, useEffect } from 'react';
import { publicAxiosInstance } from '../axiosConfig';
import { Link } from 'react-router-dom';
import '../styles/ActivePetitionsCircle.css';

const ActivePetitionsCircle = () => {
  const [activePetitionsCount, setActivePetitionsCount] = useState(0);

  useEffect(() => {
    publicAxiosInstance.get('crep/petitions/?status=active')
      .then(response => {
        setActivePetitionsCount(response.data.length);
      })
      .catch(error => {
        console.error('Erro fetching active petitions:', error);
      });
  }, []);

  return (
    <Link to="/petition">
      <dev className='active-petitions-circle'>
        <span>{activePetitionsCount}</span>
        <span className="hover-petition-text">{activePetitionsCount} Petitions</span>
      </dev>
    </Link>
  );
};

export default ActivePetitionsCircle;