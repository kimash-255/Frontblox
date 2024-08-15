
import React from 'react';

const CreateWorkspaceButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#D340A5] text-white py-2 px-4 rounded-lg text-lg flex items-center hover:bg-[#C12B8E]"
    >
      <span className="text-xl mr-2">+</span> Create Workspace
    </button>
  );
};

export default CreateWorkspaceButton;
