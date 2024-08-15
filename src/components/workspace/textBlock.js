import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSave, faTrashAlt, faAlignLeft, faAlignCenter, faAlignRight } from '@fortawesome/free-solid-svg-icons';

const TextBlock = ({ id, initialText = "Enter your text here...", initialPosition = "left", onSave, onDelete, onPositionChange }) => {
  const [text, setText] = useState(initialText);
  const [position, setPosition] = useState(initialPosition);
  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    onSave(id, text, position);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
    if (onPositionChange) onPositionChange(id, newPosition);
  };

  return (
    <div className="relative p-2 border border-gray-300 rounded shadow-lg">
      {isEditing ? (
        <>
          <textarea
            value={text}
            onChange={handleTextChange}
            className={`text-lg text-gray-800 border-none outline-none bg-transparent mb-2 w-full text-${position}`}
            placeholder="Enter your text..."
          />
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            <FontAwesomeIcon icon={faSave} />
          </button>
        </>
      ) : (
        <p className={`text-lg text-gray-800 text-${position}`}>
          {text}
        </p>
      )}
      <div className="absolute top-0 right-0 mt-2 mr-2">
        <FontAwesomeIcon
          icon={faEllipsisV}
          className="cursor-pointer"
          onClick={() => setIsEditing(!isEditing)}
        />
        {isEditing && (
          <div className="absolute right-0 bg-white border border-gray-300 rounded shadow-lg p-2">
            <button
              onClick={() => handlePositionChange("left")}
              className={`p-1 ${position === 'left' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
            >
              <FontAwesomeIcon icon={faAlignLeft} />
            </button>
            <button
              onClick={() => handlePositionChange("center")}
              className={`p-1 ${position === 'center' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
            >
              <FontAwesomeIcon icon={faAlignCenter} />
            </button>
            <button
              onClick={() => handlePositionChange("right")}
              className={`p-1 ${position === 'right' ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
            >
              <FontAwesomeIcon icon={faAlignRight} />
            </button>
            <button
              onClick={handleDelete}
              className="p-1 text-red-500"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextBlock;
