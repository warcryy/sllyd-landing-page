import React, { useEffect, useState } from 'react';

const Notification = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show notification
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Hide notification after 3 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [onClose]);

  return (
    <div 
      className={`notification ${type} ${isVisible ? 'show' : ''}`}
    >
      {message}
    </div>
  );
};

export default Notification;

