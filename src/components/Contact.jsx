import React from "react";
import "./Contact.css";
import contactImg from "../assets/contactimg.png";

const ContactUs =()=>{
    return(
        <>
       <div className="contact-container">
      <div className="contact-image">
        <img src={contactImg} alt="Contact Us" />
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Write your message" rows="5" required></textarea>
          </div>
             <div className="contact-buttons">
              <button className="contact-send-btn">Send</button>
            </div>
        </form>
      </div>
    </div>
        </>
    )
}
export default ContactUs