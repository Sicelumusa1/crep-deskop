import React, {useEffect, useState} from "react";
import { axiosInstance } from '../axiosConfig';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RatingForm = ({ councilorId }) => {
  const [selectedService, setSelectedService] = useState('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState('');
  const [messageClass, setMessageClass] = useState('');

useEffect(() => {
  // Fetch services from backend
  axiosInstance.get('crep/services/')
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
    setMessage("Please select a service and the stars");
    setMessageClass('error-message');
    setTimeout(() => {
      setMessage('');
      setMessageClass('');
    }, 5000);
    return;
  }

  // Prepare the data to send to backend
  const data = {
    service: selectedService,
    stars: rating,
    feedback: feedback,
  };
  
  // Send a post request to backend
  console.log("request Data:", data)
  axiosInstance.post(
    `crep/councilors/${councilorId}/rate_councilor/`, 
    data,
     {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
    .then((response) => {
      // Successful submission
      console.log("Response Data:", response.data)
      console.log("Rating submited successfully:", response.data);
      setMessage('Rating submited successfully');
      setMessageClass('success-message');
      setTimeout(() => {
      setMessage('');
      setMessageClass('');
    }, 5000);
      // Reset form fields
      setSelectedService('');
      setRating(0);
      setFeedback('');
      // alert('Rating submited successfully!');
    })
    .catch((error) => {
      // Error handling
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else if (error.response && error.response.status === 401) {
        setMessage('You need to login to rate a councilor');
      } else if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;
        if (errorMessage.includes("not your councilor")) {
          setMessage("This is not your councilor, you can't rate them");
        } else if (errorMessage.includes("once per month")) {
          setMessage("You can only update your rating for this service once per month.", 'error-message');
        } else {
          setMessage(errorMessage);
        }
      }
      // setMessage("An error occurred while submitting the rating. Please try again.");
      setMessageClass('error-message');
      setTimeout(() => {
      setMessage('');
      setMessageClass('');
    }, 5000);
      console.error('Error submitting ratings:', error);
      
    });
};

return (
    <div className="rating-form">
        <div className="rate"><h4 >Rate This Councilor</h4></div>
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
              style={{ color: index < rating ? '#0a9396' : 'grey', cursor: 'pointer' }}
            />
          ))}
        </div>

        <textarea
          placeholder="Provide feedback (optional)"
          value={feedback}
          onChange={handleFeedbackChange}
        />

        <button onClick={handleSubmit}>Submit</button>
        {message && <div className={`message ${messageClass}`}>{message}</div>}
    </div>
  );
};

export default RatingForm;