import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:sson76628@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppSubmit = () => {
    if (!formData.name || !formData.message) {
      alert("Please fill in your name and message first!");
      return;
    }
    const text = encodeURIComponent(`Hello Samson!\nMy name is ${formData.name}.\n\nMessage: ${formData.message}\n\n(My Email: ${formData.email})`);
    window.open(`https://wa.me/919363125355?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>
        
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-heading">Let's build something together!</h3>
            <p className="contact-desc">
              I am actively looking for entry-level backend/Python developer roles. 
              My inbox is always open. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="method-icon glass">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="method-label">Email</span>
                  <p className="method-value">sson76628@gmail.com</p>
                </div>
              </div>
              <div className="contact-method-item">
                <div className="method-icon glass">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="method-label">Location</span>
                  <p className="method-value">Vellore, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form glass" 
            onSubmit={handleEmailSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name" className="code-font">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="code-font">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="code-font">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Let's write some code..." 
                value={formData.message} 
                onChange={handleChange} 
                required
              ></textarea>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-primary form-btn">
                Send Email <Send size={18} />
              </button>
              <button 
                type="button" 
                className="btn-secondary form-btn wa-btn"
                onClick={handleWhatsAppSubmit}
              >
                Send Message <MessageSquare size={18} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
