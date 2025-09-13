import React, { useEffect, useRef } from 'react';

const Features = () => {
  const featuresRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    });

    const currentRefs = featuresRef.current.slice(); // Copy refs to avoid stale closure
    currentRefs.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      currentRefs.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !featuresRef.current.includes(el)) {
      featuresRef.current.push(el);
    }
  };

  return (
    <section id="features" className="features">
      <div className="feature-item" ref={addToRefs}>
        <div className="feature-content">
          <h2 className="section-title">Venue-Based Matching</h2>
          <p className="section-text">Connect with people who frequent your favorite places. From cozy cafes to trendy bars, find your perfect match where you love to be.</p>
        </div>
      </div>
      
      <div className="feature-item reverse" ref={addToRefs}>
        <div className="feature-content">
          <h2 className="section-title">Smart Compatibility</h2>
          <p className="section-text">AI-powered matching based on venue preferences. Our intelligent algorithm learns your taste and connects you with compatible people.</p>
        </div>
      </div>
      
      <div className="feature-item" ref={addToRefs}>
        <div className="feature-content">
          <h2 className="section-title">Safe & Secure</h2>
          <p className="section-text">Verified profiles and secure messaging ensure your safety. Connect with confidence knowing every profile is authentic.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
