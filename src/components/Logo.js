import React from 'react';

const Logo = () => {
  return (
    <div className="logo">
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="sllyd" className="logo-image" />
    </div>
  );
};

export default Logo;


