
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableCard = () => {
  const [{ isDragging }, drag] = useDrag({
    type: 'COMPONENT',
    item: { type: 'CARD', props: { id: `card-${Date.now()}` } },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`p-4 mb-2 cursor-pointer text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      Drag Me: Card
    </div>
  );
};

export default DraggableCard;
