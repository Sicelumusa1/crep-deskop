import React from 'react';
import feedback from '../assets/images/feedback.jpg'

const RatingInstruction = () => {
  return (
    <div className="card">
      <img src={feedback} alt='Error loading image'></img>
      <h2>Rating</h2>
      <ul>
        <li><h6>Make sure the selected councilor represent your ward.</h6></li>
        <li><h6>You need to be logged in to submit a rating.</h6></li>
        <li><h6>Select the service for you want to rate your councilor</h6></li>
        <li><h6>Select the stars</h6></li>
        <li><h6>Provide a feedback for your rating</h6></li>
        <li><h6>Submit your rating</h6></li>
      </ul>
    </div>
  )
}

export default RatingInstruction;
