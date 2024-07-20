import React, { useState } from 'react';
import { publicAxiosInstance } from '../axiosConfig';
import LocationSwiper from './LocationSwiper'

const CitizenStories = () => {
  
  const [selectedWard, setSelectedWard] = useState(null);
  const [perspectives, setPerspectives] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPerspectives = (ward) => {
    setLoading(true);
    
    publicAxiosInstance
    .get(`crep/perspectives/?ward=${ward}`)
      .then((response) => {
        setPerspectives(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching perspectives:', error);
        setLoading(false);
      });
  };

  const handleWardSelect = (ward) => {
    setSelectedWard(ward);
    fetchPerspectives(ward);
  };
  
  return (
    <div>
      {selectedWard === null ? (
        <LocationSwiper onSelectWard={handleWardSelect} />
      ) : (
        <div>
          <h2>perspectives in {selectedWard}</h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul>
              {perspectives.map((perspective) => (
                <li key={perspective.id}>
                  <h3>{perspective.title}</h3>
                  <p>{perspective.description}</p>
                </li>
              ))}
            </ul>
          )}
    </div>
  )}
</div>
  );
};  
export default CitizenStories;
