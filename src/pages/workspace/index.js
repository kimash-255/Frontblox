
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WorkspaceEditor from '../../components/workspace/workspaceEditor';
import CreateWorkspaceButton from '../../components/workspace/createWorkspaceButton';

const WorkspacePage = () => {
  const handleCreateWorkspace = () => {
    // Logic to handle creating a new workspace
    console.log('Create Workspace button clicked');
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <div className="p-4">
          <CreateWorkspaceButton onClick={handleCreateWorkspace} />
        </div>
        <div className="flex-grow p-4">
          <WorkspaceEditor />
        </div>
      </div>
    </DndProvider>
  );
};

export default WorkspacePage;
