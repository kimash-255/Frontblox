
import React from 'react';

const NotificationBanner = ({ id, message, type = 'info', initialPosition = { left: 0, top: 0 } }) => {
  const bannerStyles = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  };

  return (
    <div
      id={id}
      className={`p-4 text-white rounded-lg shadow-lg ${bannerStyles[type]}`}
      style={{
        position: 'absolute',
        left: initialPosition.left,
        top: initialPosition.top,
        width: '100%', // Adjust as needed
        maxWidth: '500px', // Adjust as needed
      }}
    >
      <div className="font-bold text-lg mb-2">Notification</div>
      <div>{message}</div>
    </div>
  );
};

export default NotificationBanner;
