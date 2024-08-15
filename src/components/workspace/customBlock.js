
import React, { useState } from 'react';

const CustomBlock = ({ id, initialContent = "Custom Content", initialPosition = { left: 0, top: 0 } }) => {
  const [content, setContent] = useState(initialContent);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div
      id={id}
      className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded text-white shadow-md"
      style={{
        position: 'absolute',
        left: initialPosition.left,
        top: initialPosition.top,
        width: '200px', // Adjust as needed
        height: '150px', // Adjust as needed
      }}
    >
      <textarea
        value={content}
        onChange={handleChange}
        className="w-full h-full p-2 border-none bg-transparent text-white outline-none resize-none"
        placeholder="Enter your content here..."
      />
    </div>
  );
};

export default CustomBlock;
