import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Signup = () => {
  // State variables for the form
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [username, setUsername] = useState('');
  const [section_or_area, setSection_or_area] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [province, setProvince] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [ward, setWard] = useState('');

  // State variables for dropdown options
  const [provinces, setProvinces] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [wards, setWards] = useState([]);

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

  // Fetch municipalities based on selested province
  const handleProvinceChange =  async (selectedProvince) => {
    setProvince(selectedProvince);

    try {
      const response = await axios.get(`http://127.0.0.1:8000/crep/provinces/${selectedProvince}/municipalities/`);
      setMunicipalities(response.data);
    } catch (error) {
      console.error('Error fetching municipalities:', error);
    }
  };
  // Fetch wards based on selested municipality
  const handleMunicipalityChange =  async (selectedMunicipality) => {
    setMunicipality(selectedMunicipality);

    try {
      const response = await axios.get(`http://127.0.0.1:8000/crep/municipalities/${selectedMunicipality}/wards/`);
      setWards(response.data);
    } catch (error) {
      console.error('Error fetching wards:', error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== password2) {
      console.error('Passwords do not match');
      return;
    }
      
    // Send registration data to backend
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/signup/', {
      email,
      password,
      password2,
      first_name,
      last_name,
      username,
      section_or_area,
      province,
      municipality,
      ward
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
      console.log('Registration successful:', response.data);
      // Reset form fields
      setFirst_name('');
      setLast_name('');
      setUsername('');
      setSection_or_area('');
      setEmail('');
      setPassword('');
      setPassword2('');
      setProvince('');
      setMunicipality('');
      setWard('');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className='signup'>
      <h2>Register For Free</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' value={first_name} onChange={(e) => setFirst_name(e.target.value)} required placeholder='Your Firstname' />
        <input type='text' value={last_name} onChange={(e) => setLast_name(e.target.value)} required placeholder='Your Lastname' />
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required placeholder='Known As' />
        <input type='text' value={section_or_area} onChange={(e) => setSection_or_area(e.target.value)} required placeholder='Your Section or area of residence'  />
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Valid Email Address' />
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Choose A Strong Password' />
        <input type='password' value={password2} onChange={(e) => setPassword2(e.target.value)} required placeholder='Confirm Your Password' />
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
            <select value={ward} onChange={(e) => setWard(e.target.value)} required>
              <option value=''>Select Ward</option>
              {wards.map((w) => (
                <option key={w.id} value={w.id}>{w.number}</option>
              ))}
            </select>
        </div>
        
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};
export default Signup;
