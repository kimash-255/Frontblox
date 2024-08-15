
import React, { useState } from 'react';

const FileUploader = ({ id, initialPosition = { left: 0, top: 0 } }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    alert(`File ${selectedFile ? selectedFile.name : 'not selected'} uploaded!`);
  };

  return (
    <div
      id={id}
      className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-lg text-white"
      style={{
        position: 'absolute',
        left: initialPosition.left,
        top: initialPosition.top,
        width: '100%', // Adjust as needed
        maxWidth: '400px', // Adjust as needed
      }}
    >
      <div className="mb-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="text-gray-800 border border-gray-300 rounded p-2"
        />
      </div>
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUploader;
