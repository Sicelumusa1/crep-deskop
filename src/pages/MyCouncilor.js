import React, { useState, useEffect } from "react";
// import axios from 'axios';
import MyProvince from "../components/MyProvince";
import MyMunicipality from "../components/MyMunicipality";
import MyWard from "../components/MyWard";
import CouncilorInfo from "../components/Councilor";
import '../styles/MyCouncilor.css';
import CouncilorTable from "../components/CouncilorTable";
import { axiosInstance } from '../axiosConfig';


const MyCouncilor = () => {
  const [provinces, setProvinces] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [wards, setWards] = useState([]);
  // const [councilors, setCouncilors] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  const [selectedCouncilor, setSelectedCouncilor] = useState(null);
  const [selectedProvinceName, setSelectedProvinceName] = useState('');
  const [selectedMunicipalityName, setSelectedMunicipalityName] = useState('');


  useEffect(() => {
    // Fetch provinces
    axiosInstance.get('crep/provinces/')
    .then((response) => setProvinces(response.data))
    .catch((error) => console.error('Error fetching provinces:', error));
  }, []);

    // Handle province selestion
    const handleProvinceChange = (e) => {
      const selectedProvinceId = e.target.value;
      setSelectedProvince(selectedProvinceId);
      setSelectedMunicipality('');
      setSelectedWard('');
      setSelectedCouncilor(null);
  
      // Fetch municipalities for the selected province
      axiosInstance.get(`crep/provinces/${selectedProvinceId}/municipalities/`)
        .then((response) => setMunicipalities(response.data))
        .catch((error) => console.error('Error fetching municipalities:', error));

        // Fetch Province Name
        axiosInstance.get(`crep/provinces/${selectedProvinceId}`)
          .then((response) => setSelectedProvinceName(response.data.name))
          .catch((error) => console.error('Error fetching province details'));
    };

    // Handle municipality selection
  const handleMunicipalityChange = (e) => {
    const selectedMunicipalityId = e.target.value;
    setSelectedMunicipality(selectedMunicipalityId);
    setSelectedWard('');
    setSelectedCouncilor(null);

    // Fetch wards for the selected municipality
    axiosInstance.get(`crep/municipalities/${selectedMunicipalityId}/wards/`)
      .then((response) => setWards(response.data))
      .catch((error) => console.error('Error fetching wards:', error));

    // Fetch Municipality Name
    axiosInstance.get(`crep/municipalities/${selectedMunicipalityId}`)
          .then((response) => setSelectedMunicipalityName(response.data.name))
          .catch((error) => console.error('Error fetching Municipality details'));
  };

  // Handle ward selestion
  const handleWardChange = (e) => {
    const selectedWardNumber = e.target.value;
    setSelectedWard(selectedWardNumber);
    setSelectedCouncilor(null);

    // Fetch councilor for the selected ward
    axiosInstance
        .get(`crep/wards/${selectedWardNumber}/councilors/`)
        .then((response) => {
          setSelectedCouncilor(response.data)
        })
        .catch((error) => {
            console.error('Error fetching councilor details:', error)
        });
  }  
  
  return (
    <div className='councilor-info'>
        <div className="dropdowns">
          <MyProvince
            provinces={provinces}
            selectedProvince={selectedProvince}
            handleProvinceChange={handleProvinceChange}
          />

          <MyMunicipality
            municipalities={municipalities}
            selectedMunicipality={selectedMunicipality}
            handleMunicipalityChange={handleMunicipalityChange}
          />

          <MyWard
            wards={wards}
            selectedWard={selectedWard}
            handleWardChange={handleWardChange}
          />
        </div>

        <div className="province-info">
          {!selectedProvince && !selectedMunicipality && ( 
            <div className='province-list'>
              <h3>List of Provinces</h3>
            <ul>
              {provinces.map((province) => { 
                  return (
                    <li key={province.id}>
                      {province.name}
                    </li>
                  );
                })}
              </ul> 
            </div> 
          )} 
        </div>

        {/* List of municipalities with number of wards */}
        <div className="municipality-info">
          {selectedProvince && !selectedMunicipality &&( 
          <div className='municipality-list'>
            <h3>Municipalities Under This Province</h3>
            <ul>
              {municipalities.map((municipality) => {
                return (
                  <li key={municipality.id}>
                    {municipality.name}
                  </li>
                );
              })}
            </ul>
          </div> 
          )}
        </div>
	  
        <div className="detail-info">

          {(selectedProvince && selectedMunicipality && !selectedWard) ? (
            // Display all councilors of the Municipality
            <CouncilorTable selectedMunicipality={selectedMunicipality} />
            
            ) : (
              // Display details of the selected ward/councilor
              <CouncilorInfo 
                selectedCouncilor={selectedCouncilor} 
                selectedMunicipalityName={selectedMunicipalityName} 
                selectedProvinceName={selectedProvinceName} 
              />
            )}
        </div>
    </div>
  );
};

export default MyCouncilor;
