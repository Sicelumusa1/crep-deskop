import React from 'react';
import background from '../assets/images/background.jpg'

const FindCouncilorInstr = () => {
  return (
    <div className='card'>
      <img src={background} alt='Error loading image'></img>
      <h2>Find Your Councilor</h2>
      <ul>
        <li><h6>Navigate to "MY-Councilor".</h6></li>
        <li><h6>Select your Province and Municipality from the dropdowns.</h6></li>
        <li><h6>Focus on the last <strong>TWO DIGITS</strong> on the Ward dropdown</h6></li>
      </ul>
    </div>
  )
}

export default FindCouncilorInstr;
