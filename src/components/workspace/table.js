
import React from 'react';

const Table = ({ id, data, initialPosition = { left: 0, top: 0 } }) => {
  return (
    <div
      id={id}
      className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-lg"
      style={{
        position: 'absolute',
        left: initialPosition.left,
        top: initialPosition.top,
        width: '100%', // Adjust as needed
        maxWidth: '600px', // Adjust as needed
        overflowX: 'auto',
      }}
    >
      <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Header 1</th>
            <th className="p-2">Header 2</th>
            <th className="p-2">Header 3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="p-2 border-t border-gray-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
