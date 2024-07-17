import React, { useState } from 'react';
import '../App.css';

const Reachout = () => {
  const { name, setName } = useState('');
  const { email, setEmail } = useState('');
  const { subject, setSubject } = useState('');
  const { message, setMessage} = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  }

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} required />
        <input type="email" placeholder="youremail@mail.com" value={email} onChange={handleEmailChange} required  />
        <input type="text" placeholder="Subject" required value={subject} onChange={handleSubjectChange} />
        <textarea type="textarea" rows="5" placeholder="message" value={message} onChange={handleMessageChange} required ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Reachout;