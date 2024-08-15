import React, { useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';
import WorkspaceEditorLayout from './workspaceEditor.layout';
import Heading from './heading'; // 1. Heading Component
import DraggableHeading from './draggableHeading'; // 2. DraggableHeading Component
import TextBlock from './textBlock'; // 3. TextBlock Component
import DraggableTextBlock from './draggableTextBlock'; // 4. DraggableTextBlock Component
import Card from './card'; // 5. Card Component
import DraggableCard from './draggableCard'; // 6. DraggableCard Component
import Shortcut from './shortcut'; // 7. Shortcut Component
import DraggableShortcut from './draggableShortcut'; // 8. DraggableShortcut Component
import Spacer from './spacer'; // 9. Spacer Component
import DraggableSpacer from './draggableSpacer'; // 10. DraggableSpacer Component
import Quicklist from './quicklist'; // 11. Quicklist Component
import DraggableQuicklist from './draggableQuicklist'; // 12. DraggableQuicklist Component
import NumberCard from './numberCard'; // 13. NumberCard Component
import DraggableNumberCard from './draggableNumberCard'; // 14. DraggableNumberCard Component
import CustomBlock from './customBlock'; // 15. CustomBlock Component
import DraggableCustomBlock from './draggableCustomBlock'; // 16. DraggableCustomBlock Component
import Chart from './chart'; // 17. Chart Component
import DraggableChart from './draggableChart'; // 18. DraggableChart Component
import Table from './table'; // 19. Table Component
import DraggableTable from './draggableTable'; // 20. DraggableTable Component
import Calendar from './calendar'; // 21. Calendar Component
import DraggableCalendar from './draggableCalendar'; // 22. DraggableCalendar Component
import FileUploader from './fileUploader'; // 23. FileUploader Component
import DraggableFileUploader from './draggableFileUploader'; // 24. DraggableFileUploader Component
import NotificationBanner from './notificationBanner'; // 25. NotificationBanner Component
import DraggableNotificationBanner from './draggableNotificationBanner'; // 26. DraggableNotificationBanner Component
import Email from './email'; // 27. Email Component
import DraggableEmail from './draggableEmail'; // 28. DraggableEmail Component

const WorkspaceEditor = () => {
  const [components, setComponents] = useState([]);
  const [cellSize] = useState(200); // Size of each cell in the grid

  // Function to handle dropping a component into the target area
  const handleDrop = useCallback((item, monitor) => {
    const offset = monitor.getClientOffset();
    const workspaceRect = document.querySelector('#workspace').getBoundingClientRect();
    const left = offset.x - workspaceRect.left;
    const top = offset.y - workspaceRect.top;

    const rowIndex = Math.floor(top / cellSize);
    const colIndex = Math.floor(left / cellSize);

    const newLeft = colIndex * cellSize;
    const newTop = rowIndex * cellSize;

    setComponents((prevComponents) => [
      ...prevComponents,
      {
        ...item,
        id: `component-${Date.now()}`,
        position: { left: newLeft, top: newTop },
      },
    ]);
  }, [cellSize]);

  // Drop target for handling component drops
  const [, drop] = useDrop({
    accept: 'COMPONENT',
    drop: (item, monitor) => handleDrop(item, monitor),
  });

  // Function to handle saving the text and position of a component
  const handleSave = (id, newText, newPosition) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id
          ? { ...component, props: { ...component.props, initialText: newText }, position: newPosition }
          : component
      )
    );
  };

  // Function to handle deleting a component
  const handleDelete = (id) => {
    setComponents((prevComponents) =>
      prevComponents.filter((component) => component.id !== id)
    );
  };

  // Function to handle updating the position of a component
  const handlePositionChange = (id, newPosition) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === id
          ? { ...component, position: newPosition }
          : component
      )
    );
  };

  return (
    <WorkspaceEditorLayout>
      <div className="flex h-screen bg-white">
        <div className="w-1/5 bg-gray-100 p-5 shadow-lg">
          <DraggableHeading /> {/* 1. Draggable Heading */}
          <DraggableTextBlock /> {/* 2. Draggable Text Block */}
          <DraggableCard /> {/* 3. Draggable Card */}
          <DraggableShortcut /> {/* 4. Draggable Shortcut */}
          <DraggableSpacer /> {/* 5. Draggable Spacer */}
          <DraggableQuicklist /> {/* 6. Draggable Quicklist */}
          <DraggableNumberCard /> {/* 7. Draggable Number Card */}
          <DraggableCustomBlock /> {/* 8. Draggable Custom Block */}
          <DraggableChart /> {/* 9. Draggable Chart */}
          <DraggableTable /> {/* 10. Draggable Table */}
          <DraggableCalendar /> {/* 11. Draggable Calendar */}
          <DraggableFileUploader /> {/* 12. Draggable File Uploader */}
          <DraggableNotificationBanner /> {/* 13. Draggable Notification Banner */}
          <DraggableEmail /> {/* 14. Draggable Email */}
        </div>
        <div
          id="workspace"
          className="flex-1 bg-white border-dashed border-2 border-gray-300 m-5 relative"
          ref={drop}
        >
          {components.map((component) => {
            const Component = component.type;
            return (
              <div
                key={component.id}
                className="absolute p-2"
                style={{ left: component.position?.left ?? 0, top: component.position?.top ?? 0 }}
              >
                <Component
                  {...component.props}
                  onSave={(newText, newPosition) => handleSave(component.id, newText, newPosition)}
                  onDelete={() => handleDelete(component.id)}
                  onPositionChange={(newPosition) => handlePositionChange(component.id, newPosition)}
                />
              </div>
            );
          })}
        </div>
        <div className="w-1/5 bg-gray-100 p-5 shadow-lg">
          {/* Render properties for the selected component */}
        </div>
      </div>
    </WorkspaceEditorLayout>
  );
};

export default WorkspaceEditor;
