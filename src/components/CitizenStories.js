import React, { useState } from 'react';
import { publicAxiosInstance } from '../axiosConfig';
import LocationSwiper from './LocationSwiper';
import '../styles/Perspectives.css';

const CitizenStories = () => {
  
  const [selectedWard, setSelectedWard] = useState(null);
  const [perspectives, setPerspectives] = useState([]);
  // const [loading, setLoading] = useState(false);

  const fetchPerspectives = async (ward) => {
    try {
      const response = await publicAxiosInstance.get(`crep/perspectives/?ward=${ward.id}`)
      setPerspectives( response.data);
    } catch (error) {
      console.error('Error fetching perspectives:', error);
    }
  };

  const handleWardSelect = (ward) => {
    setSelectedWard(ward);
    fetchPerspectives(ward);
  };
  
  return (
    <div className='ward-perspectives'>
      {selectedWard === null ? (
        <LocationSwiper onSelectWard={handleWardSelect} />
      ) : (
        <div>
          <h2>Perspectives in Ward {selectedWard.ward_number}</h2>
            <ul>
              {perspectives.map((perspective) => (
                <li key={perspective.id}>
                  <h3>{perspective.title}</h3>
                  <p>{perspective.description}</p>
                </li>
              ))}
            </ul>
        </div>
      )}
    </div>
  );
};  
export default CitizenStories;
