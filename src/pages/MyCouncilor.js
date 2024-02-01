import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../App.css';

const MyCouncilor = () => {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [municipalities, setMunicipalities] = useState([]);
  const [selectedMunicipality, setSelectedMunicipality] = useState(null);
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState(null);
  const [councilors, setCouncilors] = useState([]);
  const [selectedCouncilor, setSelectedCouncilor] = useState(null);

  useEffect(() => {
    fetchProvinces();
    fetchMunicipalities();
    fetchWards();
  }, []);

  const fetchProvinces = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/crep/provinces/');
      setProvinces(response.data);
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  };

  const fetchMunicipalities = async (province) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/crep/provinces/${province}/municipalities/`);
      setMunicipalities(response.data);
    } catch (error) {
      console.error('Error fetching municipalities:', error);
    }
  };

  const fetchWards = async (municipality) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/crep/municipalities/${municipality}/wards/`);
      setWards(response.data);
    } catch (error) {
      console.error('Error fetching wards:', error);
    }
  };

  const fetchCouncilors = async (ward) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/crep/wards/${ward}/councilors/`);
      setCouncilors(response.data);
    } catch (error) {
      console.error('Error fetching councilors:', error);
    }
  };
  
  // Handle province selestion
  const handleProvinceChange = (e) => {
    const province = e.target.value;
    setSelectedProvince(province);

    // Fetch municipalities for the selected province
    if (province) {
      fetchMunicipalities(province);
    }
  };

  // Handle municipality selection
  const handleMunicipalityChange = (e) => {
    const municipality = e.target.value;
    setSelectedMunicipality(municipality);

    // Fetch wards for the selected municipality
    if (municipality) {
      fetchWards(municipality);
    }
  };

  // Handle ward selection
  const handleWardChange = (e) => {
    const ward = e.target.value;
    setSelectedWard(ward);

    // Fetch wards for the selected municipality
    if (ward) {
      fetchCouncilors(ward);
      // fetch ward details to display ward number
      const selectedWardDetails = wards.find(w => w.id === ward);
      setSelectedCouncilor(selectedWardDetails);
    } else {
      // Reset selectedCuncilor if no ward is selected
      setSelectedCouncilor(null);
    }  
  };

  // // Filter municipalities based on selected province
  // const filteredMunicipalities = selectedProvince
  //   ? municipalities.filter( municipality => municipality.province === selectedProvince)
  //   : [];
  
  return (
    <div className='councilor-info'>
        <div className='councilor-selector'>
	   {/* Province dropdown */}
	  <select onChange={handleProvinceChange}>
          <option value="">Select a province</option>
          {provinces.map((province) => (
           <option key={province.id} value={province.id}>{province.name}</option>
         ))}
        </select>

	  {/* Municipality dropdown */}
        <select onChange={handleMunicipalityChange}>
          <option value="">Select a municipality</option>
          {municipalities.map((municipality) => (
            <option key={municipality.id} value={municipality.id}>{municipality.name}</option>
          ))}
        </select>

	  {/* Ward dropdown */}
        <select onChange={handleWardChange}>
          <option value="">Select a ward</option>
          {wards.map((ward) => (
            <option key={ward.id} value={ward.id}>{ward.number}</option>
          ))}
        </select>
      </div>
       
	  {/* List of provinces with number of municipalities */}
	  {!selectedProvince && !selectedMunicipality && !selectedWard && (
	   <div className='province-list'>
        <ul>
          {provinces.map((province) => {
            const provinceMunicipalities = municipalities.filter(municipality => municipality.province === province);
            return (
              <li key={province.id}>
                {province.name}: {provinceMunicipalities.length > 0 ? provinceMunicipalities.length : 'No'} municipalities
              </li>
            );
          })}
        </ul>
      </div>
    )}

    {/* List of provinces with number of municipalities */}
	  {selectedProvince && !selectedMunicipality && (
	   <div className='municipality-list'>
        <ul>
          {municipalities.map((municipality) => {
            const municipalityWards = wards.filter(ward => ward.municipality === municipality);
            return (
              <li key={municipality.id}>
                {municipality.name}: {municipalityWards.length > 0 ? municipalityWards.length : 'No'} wards
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
                <th>Ward_Number</th>
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
            <p>The councilor for ward {selectedWard}</p>
            <p>of {selectedMunicipality.name} Municipality</p>
            <p>of the {selectedProvince.name} Province</p>
            <p>is: {selectedCouncilor.names} {selectedCouncilor.surname}</p>
            <p>who is a member of {selectedCouncilor.affiliation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCouncilor;
