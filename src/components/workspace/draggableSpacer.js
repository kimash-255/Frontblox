
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableSpacer = () => {
  const [{ isDragging }, drag] = useDrag({
    type: 'COMPONENT',
    item: { type: 'SPACER', props: { id: `spacer-${Date.now()}` } },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`p-2 mb-2 cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 rounded text-white text-lg font-bold ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      Drag Me: Spacer
    </div>
  );
};

export default DraggableSpacer;
