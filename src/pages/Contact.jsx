import React , {useState}from "react";
import "./styles/Contact.css";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode } from "react-icons/fa";

function Contact() {
   const [toast, setToast] = useState(null);
   const [isSending, setIsSending] = useState(false);
   const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return; // prevent multiple clicks
  setIsSending(true); 
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
  try{
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    const data = await res.json();
  
    if (res.ok) {
      setToast({ type: "success", message: "Message sent successfully!" });
      e.target.reset();
    } else {
      setToast({ type: "error", message: data.message });
    }
  
    // Hide toast after 3 seconds
    setTimeout(() => setToast(null), 3000);
  
  }
  catch (error) {
    console.error(error);
    setToast({ type: "error", message: "Something went wrong!" });
    setTimeout(() => setToast(null), 3000);
  }finally {
    setIsSending(false); 
    setTimeout(() => setToast(null), 3000);
  }
  };
  return (
    <section className="contact-section">
      <h1 className="contact-title">Let's Connect</h1>
      <p className="contact-subtitle">
        Feel free to reach out through any of the channels below or send a message.
      </p>

      {/* Social Icons */}
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/aary-bokil-980911312" className="icon linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/aary-wq" className="icon instagram" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://wa.me/919022015752?text=Hi%20Aary,%20I%20visited%20your%20portfolio!" target="_blank" rel="noopener noreferrer" className="icon whatsapp">
          <FaWhatsapp />
        </a>
        <a href="https://leetcode.com/u/aarybokil/" className="icon github" target="_blank" rel="noopener noreferrer">
          <FaCode />
        </a>
      </div>

      {/* Contact Content - Info + Form */}
      <div className="contact-content">
        {/* Left Side - Contact Information */}
        <div className="contact-info">
          <div className="info-item1">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div className="info-details">
              <h2>Email</h2>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bokilaary@gmail.com" target="_blank">
                bokilaary@gmail.com
              </a>

            </div>
          </div>

          <div className="info-item1">
            <div className="info-icon">
              <FaPhone />
            </div>
            <div className="info-details">
              <h2>Phone</h2>
              <a href="tel:+919022015752">+91 9022015752</a>
            </div>
          </div>

          <div className="info-item1">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-details">
              <h2>Location</h2>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
  className="contact-form"
  onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Your Message</label>
          <textarea rows="5" name="message" placeholder="Enter your message" required></textarea>

          <button type="submit" className="send-btn" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>
        </form>
      </div>
      {toast && 
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      }
    </section>
  );
}

export default Contact;