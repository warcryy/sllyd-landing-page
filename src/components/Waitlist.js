import React, { useState } from 'react';
import { validateEmail } from '../utils/validation';
import { submitEmail } from '../services/emailService';
// (reverted) no overlay effect

const Waitlist = ({ showNotification }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await submitEmail(email, 'waitlist');
      showNotification('🎉 Successfully joined the waitlist!', 'success');
      setEmail('');
    } catch (error) {
      console.error('Email submit error:', error);
      showNotification('Network error. Please check your connection.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const buttonStyle = {
    background: validateEmail(email) ? '#ffffff' : '#333333',
    color: validateEmail(email) ? '#000000' : '#888888'
  };

  return (
    <section id="waitlist" className="waitlist">
      <div className="waitlist-content">
        <h2 className="section-title">Be Among the First</h2>
        <p className="section-text">Join our exclusive waitlist and get early access to sllyd when we launch.</p>
        <div className="waitlist-cta">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="email-input"
            value={email}
            onChange={handleEmailChange}
          />
          <button 
            className="join-btn" 
            style={buttonStyle}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </button>
        </div>
      </div>
      <div className="waitlist-image">
        <img src={`${process.env.PUBLIC_URL}/be-among-the-first.jpg`} alt="Be among the first" />
      </div>
    </section>
  );
};

export default Waitlist;
