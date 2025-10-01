import React from "react";
import "./contact.css"; 
import "../components/layout.css";
// CSS for header and footer
import contactImage from "../assets/contact-banner.jpg"; 
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-page">
        <div className="contact-banner">
          <img src={contactImage} alt="Contact Us" className="banner-img" />
          <h1 className="banner-title">Get in Touch</h1>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Address:</strong> 123 Career St, Tech City, India</p>
            <p><strong>Email:</strong> info@careercatalyst.in</p>
            <p><strong>Phone:</strong> +91 9876543210</p>

            <div className="social-icons">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />

              <label>Email</label>
              <input type="email" placeholder="Your Email" required />

              <label>Message</label>
              <textarea placeholder="Your Message" rows="6" required></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <iframe
            title="Career Catalyst Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.489366742106!2d77.59456231525724!3d12.971598890845338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670d456789%3A0xabcd1234efgh5678!2sTech%20City!5e0!3m2!1sen!2sin!4v1696174690000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
