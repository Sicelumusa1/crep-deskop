import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../axiosConfig';
import { useNavigate, Link } from 'react-router-dom';
import { getProvince, getMunicipality, getWard, getCouncilor } from '../services/MyCouncilorService';
import '../styles/Signup.css'

const Signup = ({ isRegistered, setIsRegistered }) => {
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
  const [councilor, setCouncilor] = useState('');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messageClass, setMessageClass] = useState('');

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
      const data = await getProvince();
      setProvinces(data);
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  };

  // Fetch municipalities based on selested province
  const handleProvinceChange =  async (selectedProvince) => {
    setProvince(selectedProvince);

    try {
      const data = await getMunicipality(selectedProvince);
      setMunicipalities(data);
    } catch (error) {
      console.error('Error fetching municipalities:', error);
    }
  };
  // Fetch wards based on selested municipality
  const handleMunicipalityChange =  async (selectedMunicipality) => {
    setMunicipality(selectedMunicipality);

    try {
      const data = await getWard(selectedMunicipality);
      setWards(data);
    } catch (error) {
      console.error('Error fetching wards:', error);
    }
  };

  // Fetch councilors based on selected ward
  const handleWardChange = async(selectedWard) => {
    setWard(selectedWard);

    try {
      const data = await getCouncilor (selectedWard)
      setCouncilors(data);
    } catch (error) {
      console.error('Error fetching councilors:', error);
    }
  };

// Function to resolve ward number into ward ID
const resolveWardId = async (selectedWardNumber) => {
  try {
    const response = await axiosInstance.get(`crep/wards/${selectedWardNumber}`);
    return response.data[0].id;
  } catch (error) {
    console.error('Error resolving ward number:', error);
    return null;
  }
};

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== password2) {
      // console.error('Passwords do not match');
      setMessage("Passwords do not match");
      setMessageClass('error-message');
      setTimeout(() => {
        setMessage('');
        setMessageClass('');
      }, 5000);
      return;
    }
      
    // Send registration data to backend
    try {
      const response = await axiosInstance.post('auth/signup/', {
      email,
      password,
      password2,
      first_name,
      last_name,
      username,
      section_or_area,
      province,
      municipality,
      ward: resolveWardId,
      councilor
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
      console.log('Registration successful:', response.data);
      setMessage("Registration successful. We emailed you an OTP to verify your account");
      setMessageClass('success-message');
      setTimeout(() => {
        setMessage('');
        setMessageClass('');
      }, 5000);
      // Redirect to OTP verification page after successful registration
      navigate('/otp-verification');

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
      setCouncilor('')
      setIsRegistered(true)
    } catch (error) {
      console.error('Registration failed:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      }
      setMessageClass('error-message');
      setTimeout(() => {
        setMessage('');
        setMessageClass('');
      }, 5000);
    }
  };

  return (
    <div className='signup'>
      <h2>Register For Free</h2>
      <form onSubmit={handleSubmit}>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Valid Email Address' />
        <div>
          <input type='text' value={first_name} onChange={(e) => setFirst_name(e.target.value)} required placeholder='Your Firstname' />
          <input type='text' value={last_name} onChange={(e) => setLast_name(e.target.value)} required placeholder='Your Lastname' />
        </div>
        <div>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required placeholder='Known As' />
          <input type='text' value={section_or_area} onChange={(e) => setSection_or_area(e.target.value)} required placeholder='Your Section or area of residence' />
        </div>
        <div>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Choose A Strong Password' />
          <input type='password' value={password2} onChange={(e) => setPassword2(e.target.value)} required placeholder='Confirm Your Password' />
        </div>
        <div className='dropdowns'>
          <div>
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
          </div>
          <div>
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
        </div>
        
        <button type='submit'>Register</button>
        {message && <div className={`message ${messageClass}`}>{message}</div>}
        <p>Already have an account ? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};
export default Signup;