
import React from 'react';

const Quicklist = ({ id, initialItems = [], initialPosition = { left: 0, top: 0 } }) => {
  return (
    <div
      id={id}
      className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded text-white shadow-md"
      style={{
        position: 'absolute',
        left: initialPosition.left,
        top: initialPosition.top,
        width: '200px', // Adjust as needed
      }}
    >
      <ul className="list-disc pl-5">
        {initialItems.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quicklist;
