
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableTable = () => {
  const [{ isDragging }, drag] = useDrag({
    type: 'COMPONENT',
    item: { type: 'TABLE', props: { id: `table-${Date.now()}` } },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`p-2 mb-2 cursor-pointer text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-lg ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      Drag Me: Table
    </div>
  );
};

export default DraggableTable;
