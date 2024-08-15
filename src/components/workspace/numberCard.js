
import React from 'react';

const NumberCard = ({ id, number = 0, initialPosition = { left: 0, top: 0 } }) => {
  return (
    <div
      id={id}
      className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded text-white shadow-md flex items-center justify-center"
      style={{
        position: 'absolute',
        left: initialPosition.left,
        top: initialPosition.top,
        width: '150px', // Adjust as needed
        height: '150px', // Adjust as needed
      }}
    >
      <span className="text-4xl font-bold">{number}</span>
    </div>
  );
};

export default NumberCard;
