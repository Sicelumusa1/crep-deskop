import React, { useState, useEffect }  from "react";
import { axiosInstance } from "../axiosConfig";
import '../styles/Contact.css';

const Contact = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [profile, setProfile] = useState({
    province: '',
    municipality: '',
    ward: '',
    councilor: '',
    section_or_area: '',
  });

  // Predefined topics
  const baseTitles = [
    "Water at ",
    "Electricity at ",
    "Road Maintenance at ",
    "Waste Management at ",
    "Public Safety at "
  ]  
  

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axiosInstance.get('auth/profile');
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  }
  
  // Handle submission of the perspective
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.post('crep/perspectives/', {
        title,
        description
      });
      alert('Perspective created successfully!');
      // Clear the form
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error creating perspective:', error);
      alert('Failed to create a perspective.');
    }
  };


  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }
  
  //  Generate titles based on the section_or_area
  const titles = baseTitles.map(title => title + profile.section_or_area);

  return (
    <div className='contact-us'>
      <h3>Share Your Feedback</h3>
      <h3>Praise Excellence or Report Issues</h3>
      <form onSubmit={handleSubmit}>
        <select value={title} onChange={(e) => setTitle(e.target.value)} required>
          <option value=''>Select Topic</option>
          {titles.map((t, index) => (
            <option key={index} value={t}>{t}</option>
          ))}
        </select>
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