
import React from 'react';

const Spacer = ({ id, initialHeight = 20, initialPosition = { left: 0, top: 0 } }) => {
  return (
    <div
      id={id}
      className="bg-gradient-to-r from-pink-500 to-purple-500 rounded"
      style={{
        width: '100%',
        height: initialHeight,
        position: 'absolute',
        left: initialPosition.left,
        top: initialPosition.top,
      }}
    />
  );
};

export default Spacer;
