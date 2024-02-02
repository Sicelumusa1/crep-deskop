import React from "react";
import '../App.css';

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <form>
        <input type="text" name="contact_user" placeholder="Name" autofocus required></input>
        <input type="email" name="contact_email" placeholder="youremail@mail.com" required></input>
        <input type="text" name="contact_subject" id="u_subject" placeholder="Subject" required></input>
        <textarea title="Message" type="textarea" name="contact_message" rows="10" placeholder="message" required maxlength="500"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
export default ContactUs;