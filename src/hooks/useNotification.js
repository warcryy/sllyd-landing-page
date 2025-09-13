import { useState } from 'react';

const useNotification = () => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type) => {
    setNotification({ message, type });
  };

  const hideNotification = () => {
    setNotification(null);
  };

  return {
    notification,
    showNotification,
    hideNotification
  };
};

export default useNotification;

