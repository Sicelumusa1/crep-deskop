import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

const MyCouncilor = () => {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [municipalities, setMunicipalities] = useState([]);
  const [selectedMunicipality, setSelectedMunicipality] = useState('');
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState('');
  const [councilors, setCouncilors] = useState([]);
  const [selectedCouncilor, setSelectedCouncilor] = useState(null);

  useEffect(() => {
    fetchProvinces();
  }, []);

  const fetchProvinces = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/crep/provinces/');
      setProvinces(response.data);
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  };

  const fetchMunicipalities = async (provinceId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/crep/municipalities/?province_id=${provinceId}`);
      setMunicipalities(response.data);
    } catch (error) {
      console.error('Error fetching municipalities:', error);
    }
  };

  const fetchWards = async (municipalityId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/crep/wards/?municipality_id=${municipalityId}`);
      setWards(response.data);
    } catch (error) {
      console.error('Error fetching wards:', error);
    }
  };

  const fetchCouncilors = async (wardNumber) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/crep/councilors/`);
      setCouncilors(response.data);

    } catch (error) {
      console.error('Error fetching councilors:', error);
    }
  };
  
  // Handle province selestion
  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setSelectedProvince(selectedProvince);
    setSelectedMunicipality('');
    setSelectedWard('');
    setSelectedCouncilor(null);

    // Fetch municipalities for the selected province
    if (selectedProvince) {
      fetchMunicipalities(selectedProvince);
    }
  };

  // Handle municipality selection
  const handleMunicipalityChange = (e) => {
    const selectedMunicipalityId = e.target.value;
    setSelectedMunicipality(selectedMunicipalityId);
    setSelectedWard('');
    setSelectedCouncilor(null);

    // Fetch wards for the selected municipality
    if (selectedMunicipalityId) {
      fetchWards(selectedMunicipalityId);
    }
  };

  // Handle ward selection
  const handleWardChange = (e) => {
    const selectedWard = e.target.value;
    setSelectedWard(selectedWard);
    setSelectedCouncilor(null);

    // Fetch wards for the selected municipality
    if (selectedWard) {
      fetchCouncilors(selectedWard);
    } 
  };
  
  return (
    <div className='councilor-info'>
        <div className='councilor-selector'>
	   {/* Province dropdown */}
	  <select onChange={handleProvinceChange} value={selectedProvince}>
          <option value="">Select a province</option>
          {provinces.map((province) => (
           <option key={province.id} value={province.id}>{province.name}</option>
         ))}
        </select>

	  {/* Municipality dropdown */}
        <select onChange={handleMunicipalityChange} value={selectedMunicipality} disabled={!selectedProvince}>
          <option value="">Select a municipality</option>
          {municipalities.map((municipality) => (
            <option key={municipality.id} value={municipality.id}>{municipality.name}</option>
          ))}
        </select>

	  {/* Ward dropdown */}
        <select onChange={handleWardChange} value={selectedWard} disabled={!selectedMunicipality}>
          <option value="">Select a ward</option>
          {wards.map((ward) => (
            <option key={ward.id} value={ward.ward_number}>{ward.ward_number}</option>
          ))}
        </select>
      </div>
       
	  {/* List of provinces with number of municipalities */}
	   {!selectedProvince && !selectedMunicipality && (
	   <div className='province-list'>
        <ul>
          {provinces.map((province) => {
            const provinceMunicipalities = municipalities.filter(municipality => municipality.province === province.id);
            return (
              <li key={province.id}>
                {province.name}: {provinceMunicipalities.length} municipalities
              </li>
            );
          })}
        </ul>
      </div>
    )}

    {/* List of municipalities with number of wards */}
	  {selectedProvince && !selectedMunicipality &&(
	   <div className='municipality-list'>
        <ul>
          {municipalities.map((municipality) => {
            const municipalityWards = wards.filter(ward => ward.municipality === municipality.id);
            return (
              <li key={municipality.id}>
                {municipality.name}: {municipalityWards.length} wards
              </li>
            );
          })}
        </ul>
      </div>
    )}  

       <div className='table'>
        {/* Table of Councilors Per Municipality */}
        {selectedMunicipality &&(
          <table>
            <thead>
              <tr>
                <th>Ward No</th>
                <th>Names</th>
                <th>Surname</th>
                <th>Affiliation</th>
              </tr>
            </thead>
            <tbody>
              {councilors.map((councilor) => (
                <tr key={councilor.id}>
                  <td>{councilor.ward_number}</td>
                  <td>{councilor.names}</td>
                  <td>{councilor.surname}</td>
                  <td>{councilor.affiliation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className='councilor-details'>
        {/* Councilors details */}
        {selectedWard && selectedCouncilor &&(
          <div>
            <h6>The councilor for ward {selectedWard.ward_number}</h6>
            <h6>of {selectedMunicipality.name} Municipality</h6>
            <h6>of the {selectedProvince.name} Province</h6>
            <h6>is: {selectedCouncilor.names} {selectedCouncilor.surname}</h6>
            <h6>who is a member of {selectedCouncilor.affiliation}</h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCouncilor;
