import React, { useState, useEffect, useRef } from 'react';
import { validateEmail } from '../utils/validation';
import { submitEmail } from '../services/emailService';
// (reverted) no overlay effect

const Hero = ({ showNotification }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const heroTitleRef = useRef(null);
  const heroImageRef = useRef(null);

  // Typing effect for hero title
  useEffect(() => {
    const heroTitle = heroTitleRef.current;
    if (!heroTitle) return;

    const text = 'Don’t Swipe. Just sllyd.';
    let i = 0;
    let isDeleting = false;

    const typeWriter = () => {
      if (isDeleting) {
        heroTitle.textContent = text.substring(0, heroTitle.textContent.length - 1);
        if (heroTitle.textContent === '') {
          isDeleting = false;
          i = 0;
          setTimeout(typeWriter, 1000);
          return;
        }
        setTimeout(typeWriter, 50);
      } else {
        heroTitle.textContent = text.substring(0, i + 1);
        i++;
        if (i === text.length) {
          isDeleting = true;
          setTimeout(typeWriter, 2000);
          return;
        }
        setTimeout(typeWriter, 100);
      }
    };

    const timer = setTimeout(typeWriter, 500);
    return () => clearTimeout(timer);
  }, []);

  // Mouse move parallax effect
  useEffect(() => {
    const heroImage = heroImageRef.current;
    if (!heroImage) return;

    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const rotateX = (mouseY - 0.5) * 10;
      const rotateY = (mouseX - 0.5) * 10;
      
      heroImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      await submitEmail(email, 'hero');
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
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-title-container">
          <h1 className="hero-title" ref={heroTitleRef}>Find Love Where You Are</h1>
        </div>
        <p className="hero-subtitle">Discover meaningful connections at your favorite venues</p>
        <div className="hero-cta">
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
      <div className="hero-image" ref={heroImageRef} style={{ position: 'relative' }}>
        <img 
          src="/find-love-where-u-are.jpg" 
          alt="Find love where you are" 
          style={{
            maxWidth: '85%',
            height: 'auto',
            borderRadius: '18px',
            display: 'block'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
