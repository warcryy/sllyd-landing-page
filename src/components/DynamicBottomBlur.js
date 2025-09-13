import React, { useState, useEffect } from 'react';

const DynamicBottomBlur = () => {
  const [showBlur, setShowBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Calculate if we're near the bottom (within 200px)
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
      
      // Show blur only if there's more content below the viewport
      // and we're not at the very bottom
      if (distanceFromBottom > 50 && documentHeight > windowHeight + 100) {
        setShowBlur(true);
      } else {
        setShowBlur(false);
      }
    };

    // Check on initial load
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`dynamic-bottom-blur ${showBlur ? 'visible' : 'hidden'}`}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100vw',
        height: '60px', // Reduced from 120px
        background: `linear-gradient(
          to top,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0.6) 30%,
          rgba(0, 0, 0, 0.3) 60%,
          rgba(0, 0, 0, 0) 100%
        )`,
        backdropFilter: 'blur(8px) saturate(150%)',
        WebkitBackdropFilter: 'blur(8px) saturate(150%)',
        pointerEvents: 'none',
        zIndex: 999999,
        opacity: showBlur ? 1 : 0,
        visibility: showBlur ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.3s ease'
      }}
    />
  );
};

export default DynamicBottomBlur;
