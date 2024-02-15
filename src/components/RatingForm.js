import React, {useEffect, useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RatingForm = ({ councilorId }) => {
  const [selectedService, setSelectedService] = useState('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [services, setServices] = useState([]);

useEffect(() => {
  // Fetch services from bachend
  axios.get('http://127.0.0.1:8000/crep/services/')
    .then(response => setServices(response.data))
    .catch(error => console.error('Error fetching services:', error))
}, []);

const handleServiceChange = (e) => {
  setSelectedService(e.target.value);
};

const handleRatingChange = (index) => {
  setRating(index);
}
  
const handleFeedbackChange = (e) => {
  setFeedback(e.target.value);
};

const handleSubmit = () => {
  // Handle the invalid inputs
  if (!selectedService || rating === 0) {
    alert("Please select a service and provide a rarting, by clicking the stars");
    return;
  }

  // Prepare the data to send to backend
  const data = {
    service: selectedService,
    stars: rating,
    feedback: feedback,
  };

  // Get the JWT access token
  const accessToken = sessionStorage.getItem('accessToken');
  
  // Set the Authorization header with the token
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  // Send a post request to backend
  axios.post(`http://127.0.0.1:8000/crep/councilors/${councilorId}/rate_councilor/`, data, { headers })
    .then((response) => {
      // Successful submission
      console.log("Raring submited successfully:", response.data);
      // Reset form fields
      setSelectedService('');
      setRating(0);
      setFeedback('');
      alert('Rating submited successfully!');
    })
    .catch((error) => {
      console.error('Error submitting ratings:', error);
      alert("An error occurred while submitting the rating. Please try again.")
    });
};
  
return (
    <div className="rating-form">
        <div className="rate"><h3 >Rate This Councilor</h3></div>
        <h5 className="rating-constraint">Please note that you can only rate them if they represent your ward</h5>
        <select value={selectedService} onChange={handleServiceChange}>
          <option value=''>Select a service</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>{service.service_name}</option>
          ))}
        </select>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              onClick={() => handleRatingChange(index + 1)}
              style={{ color: index < rating ? 'gold' : 'grey', cursor: 'pointer' }}
            />
          ))}
        </div>

        <textarea
          placeholder="Provide feedback (optional)"
          value={feedback}
          onChange={handleFeedbackChange}
        />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default RatingForm;