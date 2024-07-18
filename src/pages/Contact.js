import React, { useState, useEffect }  from "react";
import { axiosInstance } from "../axiosConfig";
import '../styles/Contact.css';

const Contact = () => {
  const [province, setProvince] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [ward, setWard] = useState('');
  const [councilor, setCouncilor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  

  // State variables for dropdown options
  const [provinces, setProvinces] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [wards, setWards] = useState([]);
  const [councilors, setCouncilors] = useState([]);

  useEffect(() => {
    fetchProvinces();
  }, []);

  const fetchProvinces = async () => {
    try {
      const response = await axiosInstance.get('crep/provinces/');
      setProvinces(response.data);
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  };

  // Fetch municipalities based on selested province
  const handleProvinceChange =  async (selectedProvince) => {
    setProvince(selectedProvince);

    try {
      const response = await axiosInstance.get(`crep/provinces/${selectedProvince}/municipalities/`);
      setMunicipalities(response.data);
    } catch (error) {
      console.error('Error fetching municipalities:', error);
    }
  };
  // Fetch wards based on selested municipality
  const handleMunicipalityChange =  async (selectedMunicipality) => {
    setMunicipality(selectedMunicipality);

    try {
      const response = await axiosInstance.get(`crep/municipalities/${selectedMunicipality}/wards/`);
      setWards(response.data);
    } catch (error) {
      console.error('Error fetching wards:', error);
    }
  };

  // Fetch councilors based on selected ward
  const handleWardChange = async(selectedWard) => {
    setWard(selectedWard);

    try {
      const response = await axiosInstance.get(`crep/wards/${selectedWard}/councilors/`)
      setCouncilors(response.data);
    } catch (error) {
      console.error('Error fetching councilors:', error);
    }
  };

// Function to resolve ward number into ward ID
// const resolveWardId = async (selectedWardNumber) => {
//   try {
//     const response = await axios.get(`http://127.0.0.1:8000/crep/wards/${selectedWardNumber}`);
//     return response.data[0].id;
//   } catch (error) {
//     console.error('Error resolving ward number:', error);
//     return null;
//   }
// };


  const handleSubmit = (e) => {
    e.preventDefault();
  }


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }
  

  return (
    <div className='contact-us'>
      <h3>Share Your Feedback</h3>
      <h3>Praise Excellence or Report Issues</h3>
      <form onSubmit={handleSubmit}>
        <div className='dropdowns'>
            <select value={province} onChange={(e) => handleProvinceChange(e.target.value)} required>
              <option value=''>Select Province</option>
              {provinces.map((prov) => (
                <option key={prov.id} value={prov.id}>{prov.name}</option>
              ))}
            </select>
            <select value={municipality} onChange={(e) => handleMunicipalityChange(e.target.value)} required>
              <option value=''>Select Municipality</option>
              {municipalities.map((muni) => (
                <option key={muni.id} value={muni.id}>{muni.name}</option>
              ))}
              </select>
              <select value={ward} onChange={(e) => handleWardChange(e.target.value)} required>
                <option value=''>Select Ward</option>
                {wards.map((w) => (
                  <option key={w.ward_number} value={w.ward_number}>{w.ward_number}</option>
                ))}
              </select>
              <select value={councilor} onChange={(e) => setCouncilor(e.target.value)} required>
                <option value=''>Select Councilor</option>
                {councilors.map((c) => (
                  <option key={c.id} value={c.id}>{c.names}</option>
                ))}
              </select>
        </div> 
        <input type='text' placeholder='Title' value={title} onChange={handleTitleChange} required />
        <textarea 
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Tell your story. Keep it short"
        required 
        maxLength={350} 
        rows={10}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Contact;