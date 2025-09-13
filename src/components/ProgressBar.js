import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const updateScrollPercent = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercent(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollPercent);

    return () => window.removeEventListener('scroll', updateScrollPercent);
  }, []);

  return (
    <div 
      className="progress-bar" 
      style={{ width: `${scrollPercent}%` }}
    />
  );
};

export default ProgressBar;


