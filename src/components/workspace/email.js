
import React, { useState } from 'react';

const Email = ({ id, initialEmail = "example@example.com", initialPosition = { left: 0, top: 0 } }) => {
  const [email, setEmail] = useState(initialEmail);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div
      id={id}
      className="p-4 border border-gray-300 rounded-lg shadow-lg bg-white"
      style={{
        position: 'absolute',
        left: initialPosition.left,
        top: initialPosition.top,
        maxWidth: '500px',
      }}
    >
      <div className="font-bold text-lg mb-2">Email Address</div>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Enter email address..."
      />
    </div>
  );
};

export default Email;
