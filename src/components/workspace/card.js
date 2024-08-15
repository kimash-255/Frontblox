import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Card = ({ id, initialTitle = "Card Title", initialContent = "Card Content", initialPosition = { left: 0, top: 0 }, linkType = "", linkTo = "", onSave, onDelete }) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [position, setPosition] = useState(initialPosition);
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSave = () => {
    onSave(id, title, content, position);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="relative p-4 border border-gray-300 rounded shadow-lg bg-gradient-to-r from-pink-500 to-purple-500">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="text-lg font-bold text-gray-800 border-none outline-none bg-transparent mb-2 w-full"
            placeholder="Enter card title..."
          />
          <textarea
            value={content}
            onChange={handleContentChange}
            className="text-gray-800 border-none outline-none bg-transparent mb-2 w-full"
            placeholder="Enter card content..."
          />
          <input
            type="text"
            value={linkType}
            onChange={(e) => onSave(id, title, content, position, e.target.value, linkTo)}
            className="text-gray-800 border-none outline-none bg-transparent mb-2 w-full"
            placeholder="Enter link type..."
          />
          <input
            type="text"
            value={linkTo}
            onChange={(e) => onSave(id, title, content, position, linkType, e.target.value)}
            className="text-gray-800 border-none outline-none bg-transparent mb-2 w-full"
            placeholder="Enter link URL..."
          />
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            <FontAwesomeIcon icon={faSave} />
          </button>
        </>
      ) : (
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-white">{content}</p>
          {linkType && linkTo && (
            <a href={linkTo} className="text-white underline mt-2 block">
              {linkType}: {linkTo}
            </a>
          )}
        </div>
      )}
      <div className="absolute top-0 right-0 mt-2 mr-2">
        <FontAwesomeIcon
          icon={faEllipsisV}
          className="cursor-pointer text-white"
          onClick={() => setIsEditing(!isEditing)}
        />
        {isEditing && (
          <div className="absolute right-0 bg-white border border-gray-300 rounded shadow-lg p-2">
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

export default Card;
