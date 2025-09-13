import React from 'react';

const CSSBlur = ({ variation = 0, className = '' }) => {
  const getBlurStyle = () => {
    const baseStyle = {
      position: 'absolute',
      top: '-15px',
      left: '-15px',
      right: '-15px',
      bottom: '-15px',
      pointerEvents: 'none',
      zIndex: 1,
      transition: 'all 0.3s ease'
    };

    if (variation === 0 || variation === 1) {
      // Rectangle blur
      return {
        ...baseStyle,
        background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        borderRadius: '30px',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: `
          0 0 20px rgba(255,255,255,0.3),
          inset 0 0 20px rgba(255,255,255,0.1),
          0 0 40px rgba(255,255,255,0.2)
        `,
        border: '1px solid rgba(255,255,255,0.2)',
      };
    } else {
      // Circle blur
      return {
        ...baseStyle,
        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
        borderRadius: '50%',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        boxShadow: `
          0 0 25px rgba(255,255,255,0.4),
          inset 0 0 25px rgba(255,255,255,0.1),
          0 0 50px rgba(255,255,255,0.25)
        `,
        border: '1px solid rgba(255,255,255,0.25)',
      };
    }
  };

  return (
    <div 
      className={`css-blur-effect ${className}`}
      style={getBlurStyle()}
    >
      {/* Additional glow layers for enhanced effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: variation === 2 ? 
          'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' :
          'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 100%)',
        borderRadius: variation === 2 ? '50%' : '25px',
        filter: 'blur(4px)',
        opacity: 0.6
      }} />
    </div>
  );
};

export default CSSBlur;


